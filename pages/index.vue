<template>
  <div>
    <div id="welcomeScreen">
      <div id="welcomeScreenContainer">
        <div>
          <h1 class="text-center">Löydä kaasutankkausasemat ympäri Suomessa</h1>
          <h2 class="text-center">
          Kaasulla.app on karttapohjainen sovellus josta löydät kaasutankkausasemat joissa voi tankkaa biokaasua tai maakaasua. Sinun tarvitsee vain myötään sovellukselle paikannus oikeus.
          </h2>
        </div>
        <div>
         <ul id="appFeaturesList">
           <li class="appFeaturesListItem">
             <div class="featuresHeading">
               <h3>Paikannus</h3>
               <h4>Alueesi lähimmät kaasutankkausasemat</h4>
             </div>
           </li>
           <li class="appFeaturesListItem">
             <div class="featuresHeading">
               <h3>Suodattaminen</h3>
               <h4>Rajaa kaasutankkausasemia kaasutyypin mukaan</h4>
             </div>
           </li>
           <li class="appFeaturesListItem">
             <div class="featuresHeading">
               <h3>Navigointi</h3>
               <h4>Reittiohje navigointi applikaatioon</h4>
             </div>
           </li>
         </ul>
        </div>
        <div>
          <button class="largeButton" @click="getUserLocation">
            <span v-if="userLocation"
              >Haetaan
              paikkatietoja</span
            >
            <span v-else>Paikanna minut</span>
          </button>

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
  @apply relative  bg-local bg-center bg-no-repeat bg-cover flex flex-col h-full text-white justify-end;
  &::before {
    content: '';
    @apply absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-top;
    //filter: grayscale(60%);
    background-image: url('~assets/img/illustrator-bg.svg');
  }
  @apply relative flex flex-col h-full text-white justify-end bg-white;
}


#welcomeScreenContainer {
  @apply font-display p-4 pb-8 m-auto relative w-full max-w-lg text-secondary;
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

#appFeaturesList{
  @apply my-8;
}
.appFeaturesListItem{
  @apply flex my-4 content-center items-center;
}
.featuresIcon{
  @apply w-12 mr-4 flex justify-center items-start;
}
.featuresHeading{
  h3{
    @apply text-lg text-secondary; 
  }
  h4{
    @apply text-xs text-secondary;
  }
}
</style>
