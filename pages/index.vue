<template>
  <div class="flex flex-wrap content-center">
    <div class="container mx-auto grid">
      <div id="welcomeScreenContainer">
        <div class="col-start-1 col-end-2">
          <h1>{{ $t('home.heading') }}</h1>
          <h2 class="max-w-lg">{{ $t('home.subheading') }}</h2>
          <button @click="getUserLocation">
            <span v-if="userLocation">{{ $t('ui.gettinglocation') }}</span>
            <span v-else>{{ $t('ui.locate') }}</span>
          </button>
        </div>
        <div class="col-start-1 col-end-2">
          <ul>
            <li class="flex py-2">
              <div
                class="h-12 w-12 flex place-items-center place-content-center rounded-full shadow-xl mr-6"
              >
                <i class="icon-crosshairs text-primary_dark"></i>
              </div>
              <div>
                <h4>{{ $t('home.features.locationHeading') }}</h4>
                <h5>{{ $t('home.features.locationContent') }}</h5>
              </div>
            </li>
            <li class="flex py-2">
              <div
                class="h-12 w-12 flex place-items-center place-content-center rounded-full shadow-xl mr-6"
              >
                <i class="icon-filter text-primary_dark"></i>
              </div>
              <div>
                <h4>{{ $t('home.features.filterHeading') }}</h4>
                <h5>{{ $t('home.features.filterContent') }}</h5>
              </div>
            </li>
            <li class="flex py-2">
              <div
                class="h-12 w-12 flex place-items-center place-content-center rounded-full shadow-xl mr-6"
              >
                <i class="icon-location-arrow text-primary_dark"></i>
              </div>
              <div>
                <h4>{{ $t('home.features.navigationHeading') }}</h4>
                <h5>{{ $t('home.features.navigationContent') }}</h5>
              </div>
            </li>
          </ul>
        </div>
        <div id="appImage">
          <div>
            <img
              src="~/assets/img//app-in-devices.svg"
              alt="App View"
              width="500px"
              height="340px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  nuxtI18n: {
    paths: {
      fi: '/',
      en: '/home',
    },
  },
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
#welcomeScreenContainer {
  @apply w-full h-full font-display;
  @screen md {
    @apply grid grid-cols-2;
  }
  h1 {
    @apply text-center text-3xl font-extrabold mb-4 leading-tight;
    @screen md {
      @apply text-left text-3xl leading-snug;
    }
    @screen lg {
      @apply text-4xl;
    }
  }
  h2 {
    @apply text-center text-base font-normal mb-8 leading-normal;
    @screen md {
      @apply text-left  leading-relaxed;
    }
  }
  button {
    @apply block w-full rounded-lg px-3 py-3 bg-primary_default text-white font-bold text-lg mb-8;
    @screen md {
      @apply max-w-xs;
    }
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
