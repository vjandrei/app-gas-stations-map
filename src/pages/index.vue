<template>
  <div id="welcomePageWrapper">
    <transition name="fade">
      <div
        id="welcomeScreen"
        v-if="noUserLocation"
        key="welcome"
      >
        <WelcomeScreen />
      </div>
      <div id="mapScreen" v-if="hasUserlocation" key="map">
        <div id="mapGridItem">
          <StationMap />
        </div>
        <div id="stationGridItem">
          <StationList />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import WelcomeScreen from '@/components/WelcomeScreen';
import StationMap from '@/components/Map';
import StationList from '@/components/StationList';
export default {

  data() {
    return {
      userCoords: [],
      show: true,
    };
  },
  components: {
    WelcomeScreen,
    StationList,
    StationMap,
  },

  mounted () {},

  computed: {
    hasUserlocation() {
      return this.$store.state.hasUserlocation;
    },
    noUserLocation() {
      return this.$store.state.gettingLocation;
    },
  },

  methods: {},
};
</script>

<style lang="postcss" scoped></style>
