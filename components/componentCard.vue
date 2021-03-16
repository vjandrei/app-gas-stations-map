<template>
  <div>
    <div class="overlay" v-if="isOpen" @click="closeCard(station)"></div>
    <transition name="show-card">
      <div id="stationCard" v-if="isOpen">
        <div id="stationCardContent">
          <div class="stationDetails">
            <div class="stationGeneralDetails">
              <h2>{{ station.name }}</h2>
              <h4>{{ station.address }}</h4>
            </div>
            <div class="stationLocationDetails space-x-1">
              <i class="icon-location text-primary"></i>
              <h5>Sijainnista</h5>
              <span>{{ (station.distance / 1000).toFixed(1) }} km</span>
            </div>
          </div>
          <div class="stationRoute"></div>
          <div class="stationOtherDetails">
            <dl>
              <dt>Tuottee</dt>
              <dd>
                <span v-for="(product, i) in station.products" :key="product[i]"
                  >{{ product != '' && i != 0 ? ',' : '' }} {{ product }}</span
                >
              </dd>
              <dt>Maksuvaihtoehdot</dt>
              <dd>
                <span v-for="(payment, i) in station.payments" :key="payment[i]"
                  >{{ payment != '' && i != 0 ? ',' : '' }} {{ payment }}</span
                >
              </dd>
              <dt>Operaattori</dt>
              <dd>{{ station.operator }}</dd>
            </dl>
            <div class="navigationActions">
              <button @click="openNavigator(station)" class="smallButton">
                Paikanna
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
      this.$store.dispatch('SET_STATION_CARD', false)
    },
    openNavigator(station) {
      if (
        /* if we're on iOS, open in Apple Maps */
        navigator.platform.indexOf('iPhone') != -1 ||
        navigator.platform.indexOf('iPod') != -1 ||
        navigator.platform.indexOf('iPad') != -1
      )
        window.open(
          'maps://maps.google.com/maps?daddr=' +
            station.coords.lat +
            ',' +
            station.coords.lng +
            '&amp;ll='
        )
      /* else use Google */ else
        window.open(
          'https://maps.google.com/maps?daddr=' +
            station.coords.lat +
            ',' +
            station.coords.lng +
            '&amp;ll='
        )
    },
  },
}
</script>

<style lang="postcss" scoped>
.show-card-enter-active,
.show-card-leave-active {
  transform: translate(0%, 100%);
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
    right: 400px;
  }
}
#stationCardContent {
  @apply bg-white p-4 rounded-md shadow-lg;
}
.stationDetails {
  @apply flex flex-row w-full justify-between leading-tight font-normal text-xs text-default font-display;
}
.stationGeneralDetails {
  @apply flex flex-grow-0 w-4/5 flex-col pr-4 border-r border-gray-300;
  h2 {
    @apply text-secondary mb-1 text-xl font-semibold;
  }
}
.stationRoute {
  @apply mt-4;
}
.stationLocationDetails {
  @apply flex flex-grow-0 flex-row pl-4 items-center;
}
.stationOtherDetails {
  @apply pt-4 border-t border-gray-300;
}
dl {
  @apply flex leading-tight font-normal text-sm font-display;
  dt {
    @apply w-1/2 flex-none text-default my-2;
  }
  dd {
    @apply text-dark my-2 font-normal;
  }
}
.navigationActions {
  @apply w-full py-2 pb-0;
}

.overlay {
  @apply z-40 fixed top-0 left-0 w-full h-full;
  background: rgba(235, 235, 235, 0.43);
  @screen lg {
    width: calc(100% - 400px);
  }
}
</style>
