<template>
  <div>
    <div class="container mx-auto p-4 s:max-w-screen-sm">
      <div class="text-center" v-if="noUserLocation">
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
          @click="getLocation"
        >
          Paikanna minut
        </button>
      </div>
      <div v-if="errorStr">
        Sorry, but the following error occurred: {{ errorStr }}
      </div>
      <div v-if="hasUserlocation">
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
      userCoords: [],
      errorStr: null,
    };
  },
  components: {
    StationList,
    StationMap,
  },
  created() {},
  computed: {
    hasUserlocation() {
      return this.$store.state.hasUserlocation;
    },
    noUserLocation() {
      return this.$store.state.gettingLocation;
    },
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
            this.$store.commit('add', {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
            });
            this.$store.dispatch('fetchFromnNavigator');
          },
          (err) => {
            reject(err);
            console.log(err.message);
            this.errorStr = err.message;
          }
        );
      });
    },
    /*
    async locateMe(e) {
      try {
        this.userCoords = await this.getLocation();
        this.$store.commit('add', {
          latitude: this.userCoords.coords.latitude,
          longitude: this.userCoords.coords.longitude,
        });
        this.$store.dispatch('getLocation');
        e.target.value = '';
      } catch (e) {
        this.noUserLocation = false;
        this.errorStr = e.message;
      }
    },
    */
  },
};
</script>
