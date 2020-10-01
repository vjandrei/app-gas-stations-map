<template>
  <div id="welcomePageWrapper">
    <transition name="fade">
      <div class="item" v-if="noUserLocation" key="welcome">
        <WelcomeScreen />
      </div>
      <div class="item" v-if="hasUserlocation" key="map">
        <StationMap />
        <StationList />
      </div>
    </transition>
  </div>
</template>

<script>
import WelcomeScreen from "@/components/WelcomeScreen";
import StationMap from "@/components/Map";
import StationList from "@/components/StationList";
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
  created() {},
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

<style lang="postcss" scoped>
</style>
