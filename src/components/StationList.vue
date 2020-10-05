<template>
  <div id="stationList">
    <div class="container mx-auto pt-6">
      Nearest stations
      <ul>
        <li v-for="station in stations" :key="station.id" ref="list">
          <nuxt-link
            class="font-semibold"
            :to="{ name: 'stations-id', params: { id: station.url_name } }"
            >{{ station.name }}
          </nuxt-link>
          ({{ (station.distance / 1000).toFixed(1) }}
          km)
          {{ station.address }}
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
  methods: {
    orderList() {
      console.log('Filter!!');
    },
  },
};
</script>

<style lang="scss"></style>
