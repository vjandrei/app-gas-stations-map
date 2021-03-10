<template>
<div>
<div class="overlay" v-if="isOpen" @click="closeCard(station)"></div>
<transition name="show-card">
  <div id="stationCard" v-if="isOpen">
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
    <div class="stationRoute">
        <img src="~/assets/img/route-sample.jpg" alt="" class="w-full">
    </div>
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
            <button @click="openNavigator(station)" class="smallButton">Paikanna</button>
        </div>
    </div>
  </div>
  </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    station: {
      type: Object,
    },
  },
  data() {
    return {
    
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
          return station
      })
  },
  methods: {
      closeCard(station){
          this.$store.dispatch('SET_STATION_CARD', false)
      },
      openNavigator(station){
        let stationLat = station.coords.lat
        let stationLong = station.coords.lng
         if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) || 
        (navigator.platform.indexOf("iPod") != -1) || 
        (navigator.platform.indexOf("iPad") != -1))
        window.open("maps://maps.google.com/maps?daddr={{stationLat}},{{stationLong}}&amp;ll=");

        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr={{stationLat}},{{stationLong}}&amp;ll=");     
        }
  },
}
</script>

<style lang="postcss" scoped>
.show-card-enter{
    opacity: 0;
    transform: translate(-50% , 100%);
}
.show-card-enter-active{
    transition: transform 1s;
}

#stationCard{
    @apply absolute bottom-0 left-1/2 z-50 w-full bg-white w-11/12 p-4 pt-6 rounded-md shadow-lg;
    transform: translate(-50% , 0%);
}
.stationDetails {
    @apply flex flex-row w-full justify-between leading-tight font-normal text-xs text-default font-display;
}
.stationGeneralDetails {
    @apply flex flex-grow-0 w-4/5 flex-col pr-4 border-r border-gray-300;
    h2 {
        @apply text-primary text-xl font-semibold;
    }
}
.stationRoute{
    @apply mt-4;
}
.stationLocationDetails {
    @apply flex flex-grow-0 flex-row pl-4 items-center ;
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
    background: rgba(235,235,235,0.43);
}

</style>
