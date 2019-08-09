<template>

 
    <no-ssr>
        <div class="container-default">
    <div class="map-container">
    <MglMap
    :access-token="accessToken"
    :map-style="mapStyle"
    :center="coordinates"
    :zoom="zoom"
    :attributionControl="false"
    :interactive="false"
    >
    <MglMarker :coordinates="coordinates">
    </MglMarker>
    </MglMap>

    </div>

  </div>
    </no-ssr>
</template>

<script>
export default {
    data() {
        /* Data properties will go here */
        return {
            accessToken: "pk.eyJ1IjoidmphbmRyZWkiLCJhIjoiY2p5bGJ4YTZnMDY5aTNjcnR3N2p4NGZmbCJ9.uxuxi-gzV2Nz47Scn-uhLw", 
            mapStyle: 'mapbox://styles/mapbox/light-v9',
            coordinates: [58.5905948, 50.8453711],
            location: null,
            zoom: 2,
            minZoom: 0,
            maxZoom: 24
        }
    },
    computed: {
    },
    mounted() { /* Code to run when app is mounted */ 
    },
    methods: { /* Any app-specific functions go here */ 
    },
    beforeMount() {
    },
}
</script>

<style lang="scss">

  .map-container {
    height: 50vh;
    width: 100%;
  }
</style>