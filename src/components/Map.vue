<template>
  <div id="map">
    <client-only>
      <l-map
        :zoom="zoom"
        :center="center"
        ref="map"
        @update:bounds="boundsUpdated"
        @update:center="centerUpdated"
        @ready="markers"
      >
        <l-tile-layer :url="url" />
        <l-marker
          v-for="station in stations"
          :key="station.id"
          :lat-lng="station.coords"
        ></l-marker>
        <l-marker :lat-lng="car.center">
          <l-icon icon-url="assets/img/car.png" />
        </l-marker>
        <l-circle-marker
          :name="circle1.name"
          :lat-lng="circle1.center"
          :radius="circle1.radius"
          :color="circle1.color"
          :fillColor="circle1.fillColor"
          :fillOpacity="circle1.fillOpacity"
          :weight="circle1.weight"
          :className="circle1.class"
        />
        <l-circle-marker
          :name="circle2.name"
          :lat-lng="circle2.center"
          :radius="circle2.radius"
          :color="circle2.color"
          :fillColor="circle2.fillColor"
          :fillOpacity="circle2.fillOpacity"
          :weight="circle2.weight"
          :className="circle2.class"
        />

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
      url:
        "https://api.mapbox.com/styles/v1/vjandrei/cjz4h2qqo069r1drtkgqxxh13/tiles/256/{z}/{x}/{y}@2x?access_token=" +
        process.env.MAPBOX_KEY,
      zoom: 13,
      center: null,
      bounds: null,
      circle1: {
        name: "userLocationPin",
        center: null,
        radius: 5,
        color: "rgba(35,136,204,0.30)",
        fillColor: "#2388CC",
        fillOpacity: 1,
        weight: 20,
        class: "mapPin",
      },
      circle2: {
        name: "userLocationPin",
        center: null,
        radius: 10,
        color: "rgba(35,136,204,0.30)",
        fillColor: "#2388CC",
        fillOpacity: 1,
        weight: 20,
        class: "mapPin",
      },
      car: {
        center: null,
      },
    };
  },
  created() {
    if (isBrowser) {
      this.$store.state.userLocation.forEach((value, key) => {
        this.center = L.latLng(Object.values(value.coords));
        this.circle1.center = L.latLng(Object.values(value.coords));
        this.circle2.center = L.latLng(Object.values(value.coords));
        this.car.center = L.latLng(Object.values(value.coords));
      });
    }
  },

  computed: {
    stations() {
      return this.$store.state.stations.all;
    },
  },

  mounted() {
    this.$nextTick(() => {
      /* remove marker
      const map = this.$refs.map.mapObject;
      L.marker(this.center).addTo(map);
      */
    });
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
