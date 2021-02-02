<template>
  <div id="mapScreenContainer">
    <div id="mapGridItem">
      <div id="mapMask">
        <div id="map">
          <client-only>
            <l-map ref="map" :zoom="userZoom || defaultZoom" :center="updatedLocation || defaultLocation">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker v-for="station in stations" :key="station.id" :lat-lng="station.coords"></l-marker>
              <l-circle-marker
                v-for="n in 2"
                :key="n.key"
                :name="circle.name"
                :lat-lng.sync="updatedLocation"
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
        {{ updatedLocation }} updated <br />
        <button @click="getNewLocation">Uusi lokaatio</button>
        <StationFilter />
      </div>
    </div>
    <div id="stationlistGridItem">
      <div id="stationlistContainer">
        <StationList :stations="stations" />
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
      defaultLocation: [],
      userLocation: [],
      userCoords: [],
      defaultZoom: 6,
      userZoom: 13,
      circle: {
        name: 'userLocationPin',
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
      this.defaultLocation = L.latLng(63.3941186, 24.7088464)
      this.userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.userLocation = L.latLng(this.userCoords)
    }
  },
  mounted() {
    this.$store.dispatch('GET_USER_SESSION_LOCATION_DATA', this.userCoords)
  },
  watch: {
    userLocation: {
      deep: true,
      async handler(value) {
        console.log(value)
      }
    }
  },
  computed: {
    ...mapGetters({
      stations: 'PASS_STATIONS',
      userlocation: 'PASS_USERLOCATION'
    }),
    updatedLocation() {
      if (isBrowser) {
        return L.latLng(Object.values(this.userlocation))
      }
    }
  },
  methods: {
    async getNewLocation() {
      this.$store.dispatch('GET_FROM_NAVIGATOR')
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
  div {
    @apply flex flex-row justify-between content-center py-3 bg-white text-base;
  }
}

#stationlistGridItem {
  @apply relative w-full px-2 bottom-0 top-1/2;
}
</style>
