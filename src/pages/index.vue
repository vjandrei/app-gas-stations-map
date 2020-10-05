<template>
  <div id="welcomePageWrapper">
    <transition name="fade">
      <div
        id="welcomeScreen"
        class="flex flex-col h-full justify-center content-center items-center place-content-center text-white"
        v-if="noUserLocation"
        key="welcome"
      >
        <WelcomeScreen />
      </div>
      <div id="mapScreen" v-if="hasUserlocation" key="map">
        <StationMap />
        <StationList />
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
  created() {
    if (process.browser) {
      var customViewportCorrectionVariable = 'vh';

      function setViewportProperty(doc) {
        var prevClientHeight;
        var customVar = '--' + (customViewportCorrectionVariable || 'vh');
        function handleResize() {
          var clientHeight = doc.clientHeight;
          if (clientHeight === prevClientHeight) return;
          requestAnimationFrame(function updateViewportHeight() {
            doc.style.setProperty(customVar, clientHeight * 0.01 + 'px');
            prevClientHeight = clientHeight;
          });
        }
        handleResize();
        return handleResize;
      }
      window.addEventListener(
        'resize',
        setViewportProperty(document.documentElement)
      );
      console.log(window.innerWidth, window.innerHeight);
    }
  },
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
#welcomeScreen {
  background-image: linear-gradient(
      to bottom,
      rgba(35, 35, 35, 0.47),
      rgba(35, 35, 35, 0.67)
    ),
    url('~assets/img/bg-min.jpg');
  //filter: saturate(0.5);
  @apply .bg-local .bg-center .bg-no-repeat .bg-cover;
}
</style>
