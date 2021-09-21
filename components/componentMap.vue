<template>
  <div id="map">
    <ComponentLocator @new-location="getNewLocation" />
    <ComponentCard />
    <client-only>
      <l-map
        id="mapcanvas"
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
          :icon="icon"
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
      icon: L.icon({
        iconUrl: require('../assets/icons/mapPin.svg'),
        iconSize: [32, 32],
        iconAnchor: [16, 16],
      }),
      circle: {
        name: 'userLocationPin',
        color: 'rgba(35,136,204,0.30)',
        fillColor: '#0045BF',
        fillOpacity: 1,
        weight: 20,
        class: 'mapPin',
      },
    }
  },
  components: {},

  created() {
    if (isBrowser) {
      this.userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.userLocation = L.latLng(this.userCoords)
    }
  },

  /*
  mounted() {
    this.$nuxt.$on('show-marker', (station) => {
      this.$nextTick(() => {
        this.$refs.map.mapObject.setView(
          L.latLng(station.coords.lat, station.coords.lng),
          14
        )
      })
    })

    this.$nuxt.$on('show-marker', (station) => {
      this.$nextTick(() => {})
    })

    this.$store
      .dispatch('GET_USER_SESSION_LOCATION_DATA', this.userCoords)
      .then(() => {
        this.$store.dispatch('GET_LOCATION_AND_DISTANCE')
      })
  },

  */

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
      this.$nuxt.$emit('select-station', station)
      this.$store.dispatch('GET_SELECTED_MARKER', station)
      this.$store.dispatch('SET_STATION_CARD', true)
    },
    resetMap() {
      this.$store.dispatch('SET_STATION_DETAILS')
    },
    async getNewLocation() {
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE').then(() => {})
      this.$store.dispatch('SET_STATION_DETAILS')
      this.$nextTick(() => {
        this.$refs.map.mapObject.setView(
          L.latLng(this.userlocation.latitude, this.userlocation.longitude)
        )
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
#map {
  @apply h-full flex flex-col;
  @screen lg {
    grid-column: 1;
    grid-row: 1/4;
  }
}
#mapcanvas {
  @apply z-0;
}
</style>
