<template>
  <div>
    <div class="overlay" v-if="isOpen" @click="closeCard(station)"></div>
    <transition name="show-card">
      <div id="stationCard" v-if="isOpen">
        <div class="closeCard" @click="closeCard(station)">
          {{ $t('ui.close') }}
        </div>
        <div id="stationCardContent">
          <div class="stationDetails">
            <div class="stationGeneralDetails">
              <h2>{{ station.name }}</h2>
              <h4>
                <i class="icon-map-marker"></i>
                {{ station.address }}
              </h4>
            </div>
            <div class="stationLocationDetails space-x-1">
              <h5>{{ $t('map.locationsHeading') }}</h5>
              <span>{{ (station.distance / 1000).toFixed(1) }} km</span>
            </div>
          </div>
          <div class="stationRoute"></div>
          <div class="stationOtherDetails">
            <dl>
              <dt>{{ $t('map.productsDetails.productHeading') }}:</dt>
              <dd>
                <span v-for="(product, i) in station.products" :key="product[i]"
                  >{{ product != '' && i != 0 ? ',' : '' }} {{ product }}</span
                >
              </dd>
              <dt>{{ $t('map.productsDetails.paymentHeading') }}:</dt>
              <dd>
                <span v-for="(payment, i) in station.payments" :key="payment[i]"
                  >{{ payment != '' && i != 0 ? ',' : '' }} {{ payment }}</span
                >
              </dd>
              <dt>{{ $t('map.productsDetails.operatorHeading') }}:</dt>
              <dd>{{ station.operator }}</dd>
            </dl>
            <div class="navigationActions">
              <button @click="openNavigator(station)">
                {{ $t('ui.locate') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      station: {},
    }
  },
  computed: {
    ...mapGetters({
      isOpen: 'PASS_STATION_CARD',
      userlocation: 'PASS_USERLOCATION',
    }),
  },
  created() {},
  mounted() {
    this.$nuxt.$on('select-station', (station) => {
      this.station = station
    })
  },
  methods: {
    closeCard(station) {
      this.$store.dispatch('RESET_STATION_CARD', false)
      this.$nuxt.$emit('remove-marker', station)
    },
    openNavigator(station) {
      if (
        /* if we're on iOS, open in Apple Maps */
        navigator.platform.indexOf('iPhone') != -1 ||
        navigator.platform.indexOf('iPod') != -1 ||
        navigator.platform.indexOf('iPad') != -1
      )
        window.open(`maps://maps.google.com/maps?daddr=&origin`)
      /* else use Google */ else
        window.open(
          `https://www.google.com/maps/dir/?api=1&or=${this.userlocation.latitude},${this.userlocation.longitude}&destination=${station.coords.lat},${station.coords.lng}&travelmode=driving`
        )
    },
  },
}
</script>

<style lang="postcss" scoped>
.show-card-enter-active,
.show-card-leave-active {
  transform: translate(0%, 100%);
  @screen lg {
    transform: translate(100%, 0%);
  }
}

.show-card-leave,
.show-card-enter {
  opacity: 0;
}

#stationCard {
  @apply absolute bottom-0 z-50  w-full p-4 pt-6;
  transition: transform 100ms cubic-bezier(0.35, 0.69, 0.48, 0.99);
  @screen lg {
    width: 400px;
    right: 0px;
    top: calc(0% + 65px);
  }
}
#stationCardContent {
  @apply bg-white p-4 rounded-md shadow-lg relative;
  @screen lg {
    height: calc(100vh - 113px);
  }
}

.closeCard {
  @apply text-primary_default font-semibold font-display tracking-wider cursor-pointer;
  position: absolute;
  top: -20px;
  right: 16px;
  background: white;
  height: 48px;
  width: 72px;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  text-align: center;
  line-height: 48px;
  text-transform: uppercase;
  font-size: 12px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%),
    -5px 4px 6px -2px rgb(0 0 0 / 5%);
  z-index: -1;
  @screen lg {
    top: 40px;
    left: -56px;
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  }
}

.stationDetails {
  @apply flex flex-row w-full justify-between leading-tight font-normal text-xs text-default font-display;
}
.stationGeneralDetails {
  @apply flex flex-grow-0  flex-col pr-4 border-r border-gray-300;
  flex: 1;
  h2 {
    @apply text-secondary_dark mb-1 text-base font-semibold;
  }
  h4 {
    @apply mb-2 text-secondary_dark text-sm font-normal;
    i {
      @apply mr-2;
    }
  }
}
.stationRoute {
  @apply mt-4;
}
.stationLocationDetails {
  @apply flex flex-grow-0 flex-col items-start justify-center text-secondary_dark px-4;
}
.stationOtherDetails {
  @apply pt-4 border-t border-gray-300;
}
dl {
  @apply flex flex-row leading-tight font-normal text-sm font-display;
  dt {
    @apply w-1/2 flex-none my-2 text-secondary_dark;
    @screen lg {
      @apply my-4;
    }
  }
  dd {
    @apply text-secondary_dark my-2 font-normal;
    @screen lg {
      @apply my-4;
    }
  }
}
.navigationActions {
  @apply w-full py-2 pb-0;
}

button {
  @apply block w-full rounded-lg px-3 py-3 bg-primary_default text-white font-bold text-lg mb-8;
  @screen md {
    @apply max-w-xs;
  }
}

.overlay {
  @apply z-40 fixed top-0 left-0 w-full h-full;
  background: rgba(235, 235, 235, 0);
  @screen lg {
    width: calc(100% - 400px);
  }
}
</style>
