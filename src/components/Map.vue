<template>
  <div id="mapScreenContainer">
    <div id="mapGridItem">
      <button id="newLocation" @click="getNewLocation">
        <i class="icon-gps"></i>
      </button>
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
        <StationFilter />
      </div>
    </div>
    <div id="stationlistGridItem">
      <div id="stationlistContainer">
        <StationList :stations="stations" :userLocation="updatedLocation" />
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
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
    this.$store.dispatch('GET_USER_SESSION_LOCATION_DATA', this.userCoords).then(() => {
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE')
    })
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
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE').then(() => {
        console.log('Valmis!')
      })
      this.userZoom = 20
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

#newLocation {
  @apply absolute z-50 right-0 w-12 h-12 rounded-full bg-white my-3 mx-3 flex justify-center items-center;
  box-shadow: 0 0px 0px 7px rgb(180 194 213 / 5%);

  i {
    font-size: 24px;
    @apply text-primary;
  }
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
