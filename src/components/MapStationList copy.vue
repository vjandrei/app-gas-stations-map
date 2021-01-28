<template>
  <div id="stationList">
    <div class="container mx-auto">
      <div class="stationListItemCard" v-for="station in stations.slice(0, 10)" :key="station.id" ref="list">
        <div class="flex items-center">
          <div class="flex-grow stationListItemCardContent">
            <h2>{{ station.name }}</h2>
            <h4>{{ station.address }}</h4>
            <h5>Nykyisestä sijainista: {{ (station.distance / 1000).toFixed(1) }} km</h5>
          </div>
          <div class="flex-grow-0 pl-2">
            <div class="stationLocationLink" @click="focusMarker(station)">
              <img src="~/assets/img/path-icon.svg" />
            </div>
          </div>
        </div>
        <div v-if="showMore">
          <dl>
            <dt>Tuotteet</dt>
            <dd>
              <span v-for="product in station.products" :key="product.id">{{ product }} </span>
            </dd>

            <dt>Maksuvaihtoehdot</dt>
            <dd>
              <span v-for="payment in station.payments" :key="payment.id">{{ payment }} </span>
            </dd>

            <dt>Operaattori</dt>
            <dd>{{ station.operator }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    locations: {
      type: Array
    },
    name: {
      type: String
    },
    address: {
      type: String
    },
    distance: {
      type: Number
    },
    location: {
      type: Number
    },
    coords: {
      type: Number
    }
  },
  data() {
    return {
      markers: [],
      limit: 1,
      showMore: false
    }
  },
  computed: {
    stations() {
      // distanse: käyttäjän koordinaateista vertaa kaikkiin station storessa oleviin koordinaatteihin.
      // distanceTo = Returns the distance (in meters) to the given LatLng calculated using the Spherical Law of Cosines.
      return this.locations
        .map(marker =>
          Object.assign({}, marker, {
            distance: L.latLng(this.$store.state.userLocationData[0].coords.latitude, this.$store.state.userLocationData[0].coords.longitude).distanceTo(
              L.latLng([marker.coords.lat, marker.coords.lng])
            )
          })
        )
        .sort((a, b) => a.distance - b.distance)
    }
  },
  created() {
    //console.time('rendering')
  },
  mounted() {
    //console.timeEnd('rendering')
    this.$store.dispatch('setNearestLocation', this.locations[0])
  },
  methods: {
    doSomethingOnReady() {
      this.map = this.$refs.map.mapObject
    },
    focusMarker(station) {
      // Lähettää emitin MapContainerille mountedille ja sielä asetetaan this.tiedot jotta setView toimii
      this.$root.$emit('setStation', station)
    },
    showStationDetails(station) {
      this.showMore = true
    },
    selectStations(filter) {
      //this.selectedFilter === 'all' ? this.stations : this.stations.filter(station => station.type.includes(this.selectedFilter))
    }
  }
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
