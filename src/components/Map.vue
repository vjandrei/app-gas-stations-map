<template>
  <div id="map">
    <client-only>
      <l-map
        :zoom="zoom"
        :center="center"
        ref="myMap"
        @update:bounds="boundsUpdated"
        @update:center="centerUpdated"
        @ready="markers"
      >
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker
          v-for="station in stations"
          :key="station.id"
          :lat-lng="station.coords"
        ></l-marker>
        <v-locatecontrol />
      </l-map>
    </client-only>
  </div>
</template>

<script>
const isBrowser = typeof window !== "undefined";
let leaflet;
if (isBrowser) {
  leaflet = require("leaflet");
}
export default {
  data() {
    /* Data properties will go here */
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: null,
      bounds: null,
    };
  },
  created() {
    if (isBrowser) {
      this.$store.state.locations.forEach((value, key) => {
        this.center = leaflet.latLng(Object.values(value.geolocations));
      });
    }
  },

  computed: {
    stations() {
      return this.$store.state.stations.all;
    },
    geolocations() {
      return this.$store.state.geolocations;
    },
  },

  methods: {
    /* Any app-specific functions go here */ markers() {},
    centerUpdated(center) {
      this.center = center;
    },
    boundsUpdated(bounds) {
      const inBounds = [];
      this.bounds = bounds;
      const markers = this.$store.state.stations.all;

      /*
      for (var i = 0, len = markers.length; i < len; i++) {
        var marker = markers[i];
        if (bounds.contains(marker.coords)) {
          inBounds.push(marker.name);
          console.log(marker.name);
        }
      }
      */
    },
  },
};
</script>

<style lang="postcss" scoped>
#map {
  height: 50vh;
  width: 100%;
}
</style>
