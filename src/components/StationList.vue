<template>
  <div id="stationList">
    <div class="container mx-auto pt-6">
      Nearest stations
      <ul>
        <li v-for="station in stations.slice(0,1)" :key="station.id" ref="list" class="stationListItem" @click="setStation(station)">
          <nuxt-link
            class="font-semibold"
            :to="{ name: 'stations-id', params: { id: station.url_name } }"
            ></nuxt-link>
          {{ station.name }}
          ({{ (station.distance / 1000).toFixed(1) }}
          km)
          {{ station.address }}
          <div v-if="showMore">
            Lisää!!
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      markers: [],
      limit: 1,
      showMore: false,
    };
  },
  computed: {
    stations() {
      return this.$store.state.stations.all
        .map((m) =>
          Object.assign({}, m, {
            distance: L.latLng(
              this.$store.state.userLocation[0].coords.latitude,
              this.$store.state.userLocation[0].coords.longitude
            ).distanceTo(L.latLng([m.coords.lat, m.coords.lng])),
          })
        )
        .sort((a, b) => a.distance - b.distance);
    },
  },
  mounted() {
  },
  methods: {
    setStation(station){
      this.$store.dispatch('updateStation', station.coords)
      this.$root.$emit('setStation')
    }
  },
};
</script>

<style lang="scss"></style>
