<template>
  <div id="appWrapper">
    <transition name="fade">
      <div id="welcomeScreen" v-if="noUserLocation" key="welcome">
        <div id="welcomeScreenContainer">
          <h1>Kaasun tankkaaminen</h1>
          <h4>{{ this.about }}</h4>
          <button class="largeButton" @click="getLocation">
            <span v-if="showLocationLoading">Haetaan paikkatietoja</span>
            <span v-else>Paikanna minut</span>
          </button>
          <p>
            <small>{{ this.locationTipMessage }}</small>
          </p>
        </div>
      </div>
      <div id="mapScreen" v-if="hasUserlocation" key="map">
        <Map />
      </div>
    </transition>
  </div>
</template>

<script>
import Map from '@/components/MapContainer'
export default {
  data() {
    return {
      about: 'Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat ympäri maailmaa.',
      locationTipMessage: 'Jotta asemat tulisi sovellukseen sinun on annettava oikeus sovellukselle käyttääkseen paikannustietoja.',
      userCoords: [],
      show: true
    }
  },
  components: {
    Map
  },
  computed: {
    showLocationLoading() {
      return this.$store.state.loadLocation
    },
    hasUserlocation() {
      return this.$store.state.hasUserlocation
    },
    noUserLocation() {
      return this.$store.state.gettingLocation
    }
  },
  methods: {
    async getLocation() {
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
  background-image: linear-gradient(180deg, rgba(1, 62, 89, 0) 34%, rgba(35, 136, 204, 0.5) 98%), url('~assets/img/bg-min.gif');
  @apply bg-local bg-center bg-no-repeat bg-cover flex flex-col h-full text-white justify-end;
}
#mapScreen {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
</style>
