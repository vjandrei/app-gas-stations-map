<template>
  <div id="welcomeScreen" class="flex flex-wrap content-center">
    <div class="container mx-auto">
      <div id="welcomeScreenContainer">
        <div class="col-start-1 col-end-2">
          <h1>Kaasutankkausasemat yhdessä sovelluksessa</h1>
          <h2>
            Kaasulla.app on karttapohjainen sovellus josta löydät bio- ja
            maakaasutankkausasemat. Sinun tarvitsee vain myötää sovellukselle
            paikannus oikeus.
          </h2>
          <button @click="getUserLocation">
            <span v-if="userLocation">Haetaan paikkatietoja</span>
            <span v-else>Paikanna minut</span>
          </button>
        </div>
        <div class="col-start-1 col-end-2">
          <h3>Ominaisuudet</h3>
          <ul>
            <li>
              <h4>Paikannus</h4>
              <h5>Alueesi lähimmät kaasutankkausasemat</h5>
            </li>
            <li>
              <h4>Suodattaminen</h4>
              <h5>Rajaa kaasutankkausasemia kaasutyypin mukaan</h5>
            </li>
            <li>
              <h4>Navigointi</h4>
              <h5>Reittiohje navigointi applikaatioon</h5>
            </li>
          </ul>
        </div>
        <div id="appImage">
          <div>
            <picture>
              <source
                srcset="~/assets/img//app-in-devices-large.webp"
                type="image/webp"
                sizes="500w"
              />
              <source
                srcset="~/assets/img//app-in-devices-large.png"
                type="image/png"
                sizes="500w"
              />
              <img
                src="~/assets/img//app-in-devices-large.png"
                alt="App View"
                width="500px"
                height="340px"
              />
            </picture>
          </div>
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
#logo {
  @apply h-6;
}

#welcomeScreen {
  @apply bg-local bg-right-bottom bg-no-repeat bg-auto h-full text-white px-8 pt-24 py-4;
  &::after {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    @apply absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-right-bottom;
    @screen lg {
      @apply bg-right-bottom;
    }
    //filter: grayscale(60%);
    background-image: url('~assets/img/background_shape.svg');
  }
}

#welcomeScreenContainer {
  @apply w-full h-full font-display text-secondary;
  @screen md {
    @apply grid grid-cols-2;
  }
  h1 {
    @apply text-2xl font-extrabold my-8 leading-tight;
    @screen md {
      @apply text-3xl;
    }
  }
  h2 {
    @apply text-xl font-normal my-8 leading-normal;
  }
  button {
    @apply block w-full max-w-xs rounded-lg px-3 py-3 bg-primary_default text-white font-bold text-lg mb-8;
  }
  h3 {
    @apply text-xl font-extrabold my-4;
  }
  h4 {
    @apply text-lg font-bold;
  }
  h5 {
    @apply text-base font-normal my-1 leading-snug;
  }
  ul {
    li {
      @apply my-4;
    }
  }
  img {
    @apply my-8;
  }
}

#appImage {
  @screen md {
    @apply col-start-2 col-end-2 row-start-1 row-end-4 flex flex-wrap content-center;
    img {
      @apply w-full;
    }
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
