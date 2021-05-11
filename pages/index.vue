<template>
  <div class="relative lg:w-full">
    <div
      class="xl:flex mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28"
    >
      <div class="xl:w-2/5 sm:text-center lg:text-left">
        <div class="">
          <div>
            <h1
              class="text-4xl tracking-tight font-extrabold text-dark sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">{{ $t('home.heading') }}</span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >
              {{ $t('home.subheading') }}
            </p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <button
                  @click="getUserLocation"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary_dark hover:bg-primary_light md:py-4 md:text-lg md:px-10"
                >
                  <span v-if="userLocation">{{
                    $t('ui.gettinglocation')
                  }}</span>
                  <span v-else>{{ $t('ui.locate') }}</span>
                </button>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <nuxt-link
                  :to="localePath('about')"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary_dark bg-secondary_light hover:bg-primary_light hover:text-white md:py-4 md:text-lg md:px-10"
                >
                  <span>{{ $t('pages.about') }} </span>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="relative mt-12 grid gap-6 bg-white sm:gap-8">
            <div
              class="-m-3 p-3 flex items-start sm:items-center sm:justify-center md:items-start md:justify-start rounded-lg"
            >
              <div
                class="sm:hidden md:flex flex-shrink-0 h-12 w-12 flex place-items-center place-content-center rounded-full shadow-md mr-6"
              >
                <i class="icon-crosshairs text-primary_dark"></i>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('home.features.locationHeading') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('home.features.locationContent') }}
                </p>
              </div>
            </div>
            <div
              class="-m-3 p-3 flex items-start sm:items-center sm:justify-center md:items-start md:justify-start rounded-lg"
            >
              <div
                class="sm:hidden md:flex flex-shrink-0 h-12 w-12 flex place-items-center place-content-center rounded-full shadow-md mr-6"
              >
                <i class="icon-filter text-primary_dark"></i>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('home.features.filterHeading') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('home.features.filterContent') }}
                </p>
              </div>
            </div>
            <div
              class="-m-3 p-3 flex items-start sm:items-center sm:justify-center md:items-start md:justify-start rounded-lg"
            >
              <div
                class="sm:hidden md:flex flex-shrink-0 h-12 w-12 flex place-items-center place-content-center rounded-full shadow-md mr-6"
              >
                <i class="icon-location-arrow text-primary_dark"></i>
              </div>
              <div class="ml-4">
                <p class="text-base font-medium text-gray-900">
                  {{ $t('home.features.navigationHeading') }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t('home.features.navigationContent') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="xl:w-3/5">
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
#appImage {
  @apply my-12;
  @screen md {
    @apply col-start-2 col-end-2 row-start-1 row-end-4 flex flex-wrap content-center;
    img {
      @apply w-full;
    }
  }
}
</style>
