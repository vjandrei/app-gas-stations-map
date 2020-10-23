<template>
  <div id="stationList">
    <div class="container mx-auto pt-6">
      Nearest stations
      <div class="stationListItemCard" v-for="station in stations.slice(0, 1)" :key="station.id" ref="list">
        <div class="flex items-center">
          <div class="flex-grow stationLocationContent" @click="showStationDetails(station)">
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
  props: ['name', 'address', 'distance', 'location', 'coords'],
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
      return this.$store.state.stations.all
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
    this.$store.dispatch('setNearestLocation', this.stations[0])
  },
  methods: {
    focusMarker(station) {
      // Lähettää emitin MapContainerille mountedille ja sielä asetetaan this.tiedot jotta setView toimii
      this.$root.$emit('setStation', station)
    },
    showStationDetails(station) {
      this.showMore = true
    }
  }
}
</script>

<style lang="scss"></style>
