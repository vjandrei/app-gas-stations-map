<template>
  <div id="stationList">
    <div class="container mx-auto pt-6">
      Nearest stations
      <div class="stationListItemCard" v-for="station in stations.slice(0, 1)" :key="station.id" ref="list">
        <div class="flex items-center">
          <div class="flex-grow stationLocationContent" @click="getStation(station)">
            <h2>{{ station.name }} {{ name }}</h2>
            <h4>{{ station.address }} {{ address }}</h4>
            <h5>Nykyisestä sijainista: {{ (station.distance / 1000).toFixed(1) }} km</h5>
          </div>
          <div class="flex-grow-0 pl-2">
            <div class="stationLocationLink" @click="setStation(station)">
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
  props: ['name', 'address', 'distance', 'coords'],
  data() {
    return {
      markers: [],
      limit: 1,
      showMore: false
    }
  },
  computed: {
    stations() {
      return this.$store.state.stations.all
        .map(m =>
          Object.assign({}, m, {
            distance: L.latLng(this.$store.state.userLocation[0].station.coords.latitude, this.$store.state.userLocation[0].station.coords.longitude).distanceTo(
              L.latLng([m.coords.lat, m.coords.lng])
            ),
            name: m.name,
            address: m.address
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
  },
  methods: {
    setStation(station) {
      this.$store.dispatch('updateStation', this.coords)
      this.$root.$emit('setStation')
    },
    getStation(station) {
      this.showMore = true
    }
  }
}
</script>

<style lang="scss"></style>
