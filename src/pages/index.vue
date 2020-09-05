<template>
  <div>
    <div class="container mx-auto p-4 s:max-w-screen-sm">
      <div class="text-center" v-if="gettingLocation">
        <h1 class="mx-auto text-center text-xl font-bold mb-4">
          Kaasun tankkaaminen
        </h1>
        <p class="mb-4">
          Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu
          asemat ympäri maailmaa. Jotta asemat tulisi sovellukseen sinun on
          annettava oikeus sovellukselle käyttääkseen paikannustietoja.
        </p>
        <button
          class="mx-auto text-center bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded"
          @click="locateMe"
        >
          Paikanna minut
        </button>
      </div>
      <div v-if="errorStr">
        Sorry, but the following error occurred: {{ errorStr }}
      </div>
      <div v-if="location">
        <StationMap />
        <pre id="coordinates" class="ui-coordinates"></pre>
        <StationList />
      </div>
    </div>
  </div>
</template>

<script>
import StationMap from '@/components/Map';
import StationList from '@/components/StationList';

export default {
  data() {
    return {
      location: null,
      gettingLocation: false,
      errorStr: null,
    };
  },
  components: {
    StationList,
    StationMap,
  },
  created() {
    this.gettingLocation = true;
  },

  methods: {
    async getLocation() {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            resolve(pos);
          },
          (err) => {
            reject(err);
          }
        );
      });
    },
    async locateMe(e) {
      this.gettingLocation = true;
      try {
        this.gettingLocation = false;
        this.location = await this.getLocation();
        this.$store.commit('add', {
          latitude: this.location.coords.latitude,
          longitude: this.location.coords.longitude,
        });
        e.target.value = '';
      } catch (e) {
        this.gettingLocation = false;
        this.errorStr = e.message;
      }
    },
  },
};
</script>
