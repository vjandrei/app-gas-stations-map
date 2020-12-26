<template>
  <div id="appWrapper">
    <transition name="fade">
      <div id="welcomeScreen">
        <div id="welcomeScreenContainer">
          <h1>Löydä kaasuasema</h1>
          <h2>{{ this.aboutApp }}</h2>
          <button class="largeButton" @click="getUserLocation">
            <span v-if="userLocation">Haetaan paikkatietoja</span>
            <span v-else>Paikanna minut</span>
          </button>
          <p>
            <small>{{ this.locationTipMessage }}</small>
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Map from '@/components/MapContainer'
export default {
  transition: {
    name: 'home'
  },
  data() {
    return {
      aboutApp: this.$store.state.aboutApp,
      locationTipMessage: this.$store.state.locationTipMessage
    }
  },
  components: {
    Map
  },
  computed: {
    userLocation() {
      return this.$store.state.userLocation
    }
  },
  methods: {
    async getUserLocation() {
      this.$store.dispatch('fetchFromNavigator')
    }
  }
}
</script>

<style lang="postcss" scoped>
#appWrapper {
  width: inherit;
  @apply relative;
}
#welcomeScreen {
  @apply relative bg-local bg-center bg-no-repeat bg-cover flex flex-col h-full text-white justify-end;
  &::before {
    content: '';
    @apply absolute inset-0 w-full h-full bg-cover bg-center;
    //filter: grayscale(60%);
    background-blend-mode: saturation;
    background-image: linear-gradient(180deg, rgba(0, 48, 69, 0) 30%, rgba(0, 0, 0, 0.74) 100%), url('~assets/img/bg-min.gif');
  }
}

#welcomeScreenContainer {
  backdrop-filter: blur(0.8px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  @apply font-display p-4 pb-8 w-11/12 m-auto relative rounded-lg;

  h1 {
    @apply text-4xl font-bold mb-4 leading-10;
  }
  h2 {
    @apply text-lg font-normal mb-4 leading-6;
  }
  button {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  p {
    @apply text-base leading-4 pt-4 text-center w-10/12 m-auto;
  }
}
</style>
