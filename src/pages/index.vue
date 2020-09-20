<template>
  <div>
    <div class="container mx-auto p-4 s:max-w-screen-sm">
      <div class="flex flex-col h-screen justify-between">
        <header>
        <div class="text-center" v-if="noUserLocation">
          <div class="fancy">
            <div class="fancy__item fancy__item--top"></div>
            <div class="fancy__item fancy__item--left"></div>
            <div class="fancy__item fancy__item--right"></div>
            <div class="fancy__item fancy__item--bottom"></div>
            <svg
              class="fancy__mask"
              width="100%"
              height="100%"
              viewBox="0 0 1600 1592"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 1550.98V1591.29L779.08 812.213C790.795 800.497 809.79 800.497 821.506 812.213L1600 1590.71V1549.29L841.213 790.506C829.497 778.79 829.497 759.795 841.213 748.079L1589.29 0H1550.98L414.122 1136.86C402.406 1148.58 383.411 1148.58 371.695 1136.86L0 765.166V806.833L350.862 1157.7C362.577 1169.41 362.577 1188.41 350.862 1200.12L0 1550.98Z"
                fill="white"
              />
            </svg>
          </div>
          </div>
          </header>
          <main class="mb-auto"></main>
          <footer>
          <div class="rounded-t-lg shadow-2xl w-5/6 m-auto mt-8 p-4">
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
          </footer>
        </div>
        <div v-if="hasUserlocation">
          <StationMap />
          <pre id="coordinates" class="ui-coordinates"></pre>
          <StationList />
        </div>
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
