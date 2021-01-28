<template>
  <div>
    <div v-for="station in stations" :key="station.id" class="stationListItemCard">
      <div class="flex items-center">
        <div class="flex-grow stationListItemCardContent">
          <h2>{{ station.name }}</h2>
          <h4>{{ station.address }}</h4>
          <h5>Nykyisestä sijainista: km</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const isBrowser = typeof window !== 'undefined'
let leaflet

if (isBrowser) {
  leaflet = require('leaflet')
}

export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      stations: 'stations/PASS_STATIONS'
    })
  },
  created() {
    this.$store.dispatch('stations/GET_DISTANCE')
  },
  mounted() {
    //this.stations = this.$store.state.stations.data
    /*
    const stationsCoords = this.stations.map(station => station.coords)
      this.stationsDistace = stationsCoords
        .map(x =>
          Object.assign({}, x, {
            distance: L.latLng(userCoordsList).distanceTo(L.latLng(x.lat, x.lng))
          })
        )
        .sort((a, b) => a.distance - b.distance)
      .map(list =>
        Object.assign({}, list, {
          distance: L.latLng(this.userCoords.latitude, this.userCoords.longitude).distanceTo(L.latLng(list.coords.lat, list.coords.lng))
        })
      )
      .sort((a, b) => a.distance - b.distance)
      */
  },
  methods: {}
}
</script>

<style lang="postcss" scoped>
#stationList {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateY(0px);
  /*background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 3%, #ffffff 100%);*/
  @apply pb-2;
  height: 50vh;
  top: 0%;
  position: relative;
}

.stationListItemCard {
  @apply bg-white p-4 rounded-lg mt-2;
  box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.5);
  dl,
  dd {
    @apply font-normal text-sm;
  }
}

.stationListItemCardContent {
  h2 {
    @apply font-medium text-xl text-primary;
  }
  h4 {
    @apply text-sm mb-1;
  }
  h5 {
    @apply font-normal text-xs;
  }
}

.stationLocationLink {
  @apply rounded-full relative;
  transform-style: preserve-3d;
  background-image: linear-gradient(180deg, rgba(219, 227, 236, 0.26) 0%, rgba(180, 194, 213, 0.26) 100%);
  &:before {
    @apply absolute inset-0 bg-primary rounded-full;
    content: '';
    transform: scale(0.8);
    z-index: -1;
  }
  img {
    @apply p-6 h-full;
  }
}
</style>
