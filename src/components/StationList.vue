<template>
  <div>
    List of Stations
    {{ stationName }}
    <ul>
      <li v-for="station in stations" :key="station.id" ref="list">
        <nuxt-link
          class="font-semibold"
          :to="{ name: 'stations-id', params: { id: station.url_name } }"
          >{{ station.name }}</nuxt-link
        >
        {{ station.address }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    stations() {
      return this.$store.state.stations.all;
    },
    ...mapState({
      stationName: (state) => state.stations.name,
    }),
  },
  methods: {
    orderList() {
      console.log('Filter!!');
    },
  },
};
</script>

<style lang="scss"></style>
