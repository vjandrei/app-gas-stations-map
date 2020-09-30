<template>
  <div>
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    <transition name="fade">
      <p v-if="!show">Goodbye</p>
    </transition>

    <transition name="fade">
      <div v-if="noUserLocation">
        <WelcomeScreen />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="hasUserlocation">
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

<style lang="postcss" scoped></style>
