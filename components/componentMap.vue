<template>
  <div id="map">
    <ComponentLocator @new-location="newLocation" />
    <client-only>
      <l-map
        ref="map"
        :zoom="userZoom || defaultZoom"
        :center="updatedLocation || defaultLocation"
        @click="resetMap"
        :options="{ zoomControl: false }"
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
</template>

<script>
import { mapGetters } from 'vuex'
const isBrowser = typeof window !== 'undefined'

export default {
  data() {
    return {
      url:
        'https://api.mapbox.com/styles/v1/vjandrei/cjz4h2qqo069r1drtkgqxxh13/tiles/256/{z}/{x}/{y}@2x?access_token=' +
        process.env.MAPBOX_KEY,
      userLocation: [],
      userCoords: [],
      defaultZoom: 6,
      userZoom: 12,
      circle: {
        name: 'userLocationPin',
        color: 'rgba(35,136,204,0.30)',
        fillColor: '#2388CC',
        fillOpacity: 1,
        weight: 20,
        class: 'mapPin',
      },
      panelState: 'collapsed',
      gravity: 'bottom',
    }
  },
  components: {},
  created() {
    if (isBrowser) {
      this.userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.userLocation = L.latLng(this.userCoords)
    }
  },
  mounted() {
    this.$nuxt.$on('show-station-marker', (station) => {
      this.$nextTick(() => {
        this.$refs.map.mapObject.fitBounds(
          [[station.coords.lat, station.coords.lng]],
          { maxZoom: 12 }
        )
      })
    })
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
    getMarker(station) {
      this.$store.dispatch('GET_SELECTED_MARKER', station)
    },
    resetMap() {
      this.$store.dispatch('SET_STATION_DETAILS')
    },
    newLocation() {
      this.$store
        .dispatch('GET_USER_SESSION_LOCATION_DATA', this.userCoords)
        .then(() => {
          this.$store.dispatch('GET_LOCATION_AND_DISTANCE')
          console.log('ready!')
        })
      /*
      this.$nextTick(() => {
        this.$refs.map.mapObject.fitBounds(
          [[this.userlocation.latitude, this.userlocation.longitude]],
          {
            maxZoom: 15,
          }
        )
      })
      */
    },
  },
}
</script>

<style lang="postcss" scoped>
#map {
  @apply h-full z-10;
}
</style>
