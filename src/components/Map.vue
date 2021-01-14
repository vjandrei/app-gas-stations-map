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
        <StationFilter v-for="filter in filters" @sending-stations="selectStations" :name="filter.name" :value="filter.value" :selected-filter="selectedFilter" :key="filter.key" />
      </div>
    </div>
    <div id="stationlistGridItem">
      <div id="stationlistContainer">
        <StationList v-for="station in stations" :key="station.key" :station="station" />
      </div>
    </div>
  </div>
</template>

<script>
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
      zoom: null,
      stations: [],
      filters: [
        { name: 'Kaikki asemat', value: 'all' },
        { name: 'Biokaasu', value: 'biogas' },
        { name: 'Maakaasu', value: 'naturalgas' }
      ],
      userCoords: [],
      selectedFilter: 'all',
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
      this.zoom = 13
    }
  },
  mounted() {
    this.stations = this.$store.state.stations.data
      .map(list =>
        Object.assign({}, list, {
          distance: L.latLng(this.userCoords.latitude, this.userCoords.longitude).distanceTo(L.latLng(list.coords.lat, list.coords.lng))
        })
      )
      .sort((a, b) => a.distance - b.distance)
  },
  computed: {},
  methods: {
    doSomethingOnReady() {
      this.map = this.$refs.map.mapObject
    },
    selectStations(filter) {
      this.selectedFilter = filter.value
      this.selectedFilter === 'all' ? (this.stations = this.$store.state.stations.data) : (this.stations = this.$store.state.stations.data.filter(station => station.type.includes(filter.value)))
    }
  }
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
  @apply flex flex-row justify-between content-center py-3 bg-white text-base;
}

#stationlistGridItem {
  @apply relative w-full px-2 overflow-y-scroll bottom-0 top-1/2;
}
#stationlistContainer {
}
</style>
