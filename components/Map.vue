<template>
  <div id="mapScreenContainer">
    <div id="actionGridItem">
      <div id="actionContainer">
        <button id="newLocation" @click="getNewLocation">
          <i class="icon-gps"></i>
        </button>
      </div>
    </div>
    <div id="mapGridItem">
      <div id="mapContainer">
        <div id="mapMask">
          <div id="map">
            <client-only>
              <l-map
                ref="map"
                :zoom="userZoom || defaultZoom"
                :center="updatedLocation || defaultLocation"
                @click="resetMap"
              >
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker
                  v-for="station in stations"
                  :key="station.id"
                  :lat-lng="station.coords"
                  @click="getMarker(station)"
                ></l-marker>
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
    </div>
    <div id="filterGridItem">
      <div id="filterContainer">
        <StationFilter />
      </div>
    </div>
    <div id="stationlistGridItem">
      <div id="stationlistContainer">
        <StationList :station="showStation" />
      </div>
    </div>
    <nav>
      <div id="navLink1" class="navLink"><i class="icon-list"></i></div>
      <div id="formInput">
        <span>
          <i class="icon-location"></i>
        </span>
        <input
          type="text"
          placeholder="Paikanna osoitteella tai postinumerolla"
        />
      </div>
      <div id="navLink2" class="navLink"><i class="icon-car"></i></div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const isBrowser = typeof window !== 'undefined'

import StationFilter from '@/components/MapFilter'
import StationList from '@/components/MapStationList'

export default {
  data() {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
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
        class: 'mapPin',
      },
    }
  },

  components: {
    StationFilter,
    StationList,
  },
  created() {
    if (isBrowser) {
      //this.defaultLocation = L.latLng(63.3941186, 24.7088464)
      this.userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.userLocation = L.latLng(this.userCoords)
    }
  },
  mounted() {
    this.$store
      .dispatch('GET_USER_SESSION_LOCATION_DATA', this.userCoords)
      .then(() => {
        this.$store.dispatch('GET_LOCATION_AND_DISTANCE')
      })
  },
  computed: {
    ...mapGetters({
      stations: 'PASS_STATIONS',
      userlocation: 'PASS_USERLOCATION',
      defaultLocation: 'PASS_DEFAULT_LOCATION',
      showStation: 'PASS_STATION',
    }),
    updatedLocation() {
      if (isBrowser) {
        return L.latLng(Object.values(this.userlocation))
      }
    },
  },
  methods: {
    async getNewLocation() {
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE').then(() => {
        console.log('Valmis!')
      })
      this.$store.dispatch('SET_STATION_DETAILS')
      this.userZoom = 17
    },
    getMarker(station) {
      this.$store.dispatch('GET_SELECTED_STATION', station)
    },
    resetMap() {
      this.$store.dispatch('SET_STATION_DETAILS')
    },
  },
}
</script>

<style lang="postcss" scoped>
#mapScreenContainer {
  @apply grid h-full grid-cols-1 grid-rows-2;
  @screen sm {
    @apply grid-cols-3 grid-rows-1;
  }
}
#mapGridItem {
  @apply col-start-1 col-end-1 row-start-1 row-end-3 overflow-hidden;
  @screen sm {
    @apply col-start-1 col-end-4 row-start-1 row-end-5;
  }
}

#mapMask {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: fixed;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  &.full {
    height: 100vh !important;
  }
}

#map {
  height: 100vh;
}

#actionGridItem {
  @apply relative;
  @screen sm {
    @apply col-start-2 col-end-3;
  }
}

#newLocation {
  bottom: -8px;
  @apply absolute z-50 right-0 w-12 h-12 rounded-full bg-white my-3 mx-3 flex justify-center items-center;
  box-shadow: 0 0px 0px 7px rgb(180 194 213 / 5%);
  i {
    font-size: 24px;
    @apply text-primary;
  }
}

#filterGridItem {
  @apply relative w-full px-2 pb-2;
  @screen sm {
    @apply col-start-2 col-end-3;
  }
}

#stationlistGridItem {
  @apply relative w-full px-2 pb-2;
  @screen sm {
    @apply col-start-2 col-end-3;
  }
}

nav {
  @apply relative w-full bg-white flex justify-between px-6 py-4;
  box-shadow: 0 -10px 50px 0 rgba(152, 152, 152, 0.5);
  @screen sm {
  }
  .navLink {
    @apply flex-none flex justify-center content-center items-center text-primary;
  }
  #formInput {
    @apply w-full px-6 flex items-center;
  }
  span {
    @apply absolute text-primary text-base items-center justify-center w-8 pl-4;
  }
  input {
    @apply flex-grow w-full py-2 px-4 pl-10 text-sm border border-gray-300 border-solid rounded;
  }
}
</style>
