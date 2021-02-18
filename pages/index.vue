<template>
  <div id="appWrapper">
    <transition name="fade">
      <div id="welcomeScreen">
        <div id="welcomeScreenContainer">
          <div class="w-full pt-1 pb-5">
            <div id="logo">
              <i class="icon-gas-station"></i>
            </div>
          </div>
          <div class="mb-5">
            <h1 class="text-center">Löydä kaasuasema.</h1>
            <h2 class="text-center">
              Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu
              asemat ympäri maailmaa.
            </h2>
          </div>
          <div>
            <button class="largeButton" @click="getUserLocation">
              <span v-if="userLocation"
                ><i class="mdi mdi-lock-outline mr-1"></i>Haetaan
                paikkatietoja</span
              >
              <span v-else>Paikanna minut</span>
            </button>
            <p>
              <small
                >Jotta asemat tulisi sovellukseen sinun on annettava oikeus
                sovellukselle käyttääkseen paikannustietoja.</small
              >
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Map from '@/components/MapContainer'
export default {
  transition: {
    name: 'home',
  },
  data() {
    return {}
  },
  components: {
    Map,
  },
  computed: {
    userLocation() {
      return this.$store.state.userLocation
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
    background-image: linear-gradient(
        180deg,
        rgba(0, 48, 69, 0) 30%,
        rgba(0, 0, 0, 0.74) 100%
      ),
      url('~assets/img/bg-min.jpg');
  }
}

#welcomeScreenContainer {
  //backdrop-filter: blur(0.8px);
  //text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  @apply font-display p-4 pb-8 m-auto relative rounded-lg w-10/12 max-w-lg bg-white shadow-lg p-5 text-gray-700;
  #logo {
    @apply bg-blue-600 text-white overflow-hidden rounded-full w-16 h-16 -mt-16 mx-auto shadow-lg flex justify-center items-center;
  }
  h1 {
    @apply text-2xl font-bold mb-4 leading-10;
  }
  h2 {
    @apply text-base font-normal mb-2 leading-6;
  }
  button {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    @apply block w-full max-w-xs mx-auto rounded-lg px-3 py-3;
  }
  p {
    @apply text-base leading-4 pt-4 text-center w-10/12 m-auto;
  }
}
</style>
