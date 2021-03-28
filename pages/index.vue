<template>
  <div id="welcomeScreen">
    <div class="container mx-auto">
      <div id="welcomeScreenContainer">
        <div>1</div>
        <div>
          <img src="~/assets/img/app-in-devices.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {
    userLocation() {
      return this.$store.state.loadingStatus
    },
  },
  methods: {
    async getUserLocation() {
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE')
    },
  },
}
</script>

<style lang="postcss" scoped>
/*
#welcomeScreen {
  @apply relative flex flex-col h-full text-white justify-end bg-white ;
}
*/

#welcomeScreen {
  @apply bg-local bg-center bg-no-repeat bg-auto h-full text-white;
  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    @apply absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-center;
    @screen lg {
      @apply bg-cover bg-top
    }
    //filter: grayscale(60%);
    background-image: url('~assets/img/background_shape.svg');
  }
}

#welcomeScreenContainer {
  @apply w-full h-full grid grid-cols-2 grid-rows-1 font-display text-secondary ;
  display: grid;
  align-items: center;
  justify-items: center;
  height: 100vh;
  h1 {
    @apply text-2xl font-bold mb-4 leading-snug;
  }
  h2 {
    @apply text-sm font-normal mb-2 leading-tight;
  }
  button {
    @apply block w-full max-w-xs mx-auto rounded-lg px-3 py-3 bg-primary text-white;
  }
  p {
    @apply text-base leading-4 pt-4 text-center w-10/12 m-auto;
  }
}

#appFeaturesList {
  @apply my-8;
}
.appFeaturesListItem {
  @apply flex my-4 content-center items-center;
}
.featuresIcon {
  @apply w-12 mr-4 flex justify-center items-start;
}
.featuresHeading {
  h3 {
    @apply text-lg font-semibold text-secondary;
  }
  h4 {
    @apply text-xs text-secondary;
  }
}
</style>
