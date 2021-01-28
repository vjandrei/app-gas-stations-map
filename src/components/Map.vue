<template>
  <div id="mapScreenContainer">
    <div id="mapGridItem">
      <div id="mapMask">
        <div id="map">
          <client-only>
            <l-map :zoom="zoom" :center="center">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker v-for="station in stations" :key="station.id" :lat-lng="station.coords"></l-marker>
              <l-circle-marker
                v-for="n in 2"
                :key="n.key"
                :name="circle.name"
                :lat-lng="circle.center"
                :radius="n * 3"
                :color="circle.color"
                :fillColor="circle.fillColor"
                :fillOpacity="circle.fillOpacity"
                :weight="circle.weight"
                :className="circle.class"
              />
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
    <div id="filterGridItem">
      <div id="filterContainer">
        <StationFilter />
      </div>
    </div>
    <div id="stationlistGridItem">
      <div id="stationlistContainer">
        <StationList />
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

import StationFilter from '@/components/MapFilter'
import StationList from '@/components/MapStationList'

export default {
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/vjandrei/cjz4h2qqo069r1drtkgqxxh13/tiles/256/{z}/{x}/{y}@2x?access_token=' + process.env.MAPBOX_KEY,
      center: null,
      zoom: 13,
      userCoords: [],
      circle: {
        name: 'userLocationPin',
        center: null,
        color: 'rgba(35,136,204,0.30)',
        fillColor: '#2388CC',
        fillOpacity: 1,
        weight: 20,
        class: 'mapPin'
      }
    }
  },

  components: {
    StationFilter,
    StationList
  },

  created() {
    if (isBrowser) {
      this.userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.center = L.latLng(Object.values(this.userCoords))
      this.circle.center = L.latLng(Object.values(this.userCoords))
    }
  },
  mounted() {},
  computed: {
    ...mapGetters({
      stations: 'stations/PASS_STATIONS'
    })
  },
  methods: {}
}
</script>

<style lang="postcss" scoped>
#mapScreenContainer {
  @apply flex h-full flex-col;
  @screen sm {
    @apply grid-cols-2 grid-rows-1;
  }
}
#mapGridItem {
  @apply overflow-hidden row-auto;
}

#mapMask {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: fixed;
  height: 50vh;
  overflow: hidden;
  width: 100%;
  &.full {
    height: 100vh !important;
  }
}

#map {
  height: 100vh;
}

#filterGridItem {
  @apply relative w-full top-1/2;
}

#filterContainer {
  div {
    @apply flex flex-row justify-between content-center py-3 bg-white text-base;
  }
}

#stationlistGridItem {
  @apply relative w-full px-2 bottom-0 top-1/2;
}
</style>
