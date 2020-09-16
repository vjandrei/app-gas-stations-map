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
          <span v-if="showLocationLoading">Haetaan paikkatietoja</span>
          <span v-else>Paikanna minut</span>
        </button>
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
    showLocationLoading() {
      return this.$store.state.loadLocation;
    },
  },
  methods: {
    async getLocation() {
      this.$store.dispatch('fetchFromNavigator');
    },
  },
};
</script>
