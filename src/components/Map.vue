<template>
  <div id="mapScreenContainer">
    <div id="mapGridItem">
      <div id="mapMask">
        <div id="map">
          <client-only>
            <l-map :zoom="zoom" :center="center">
              <l-tile-layer :url="url"></l-tile-layer>
            </l-map>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const isBrowser = typeof window !== 'undefined'
let leaflet

if (isBrowser) {
  leaflet = require('leaflet')
}
export default {
  data() {
    return {
      url: 'https://api.mapbox.com/styles/v1/vjandrei/cjz4h2qqo069r1drtkgqxxh13/tiles/256/{z}/{x}/{y}@2x?access_token=' + process.env.MAPBOX_KEY,
      center: null,
      zoom: null
    }
  },
  created() {
    if (isBrowser) {
      const userCoords = JSON.parse(sessionStorage.getItem('userCoords'))
      this.center = L.latLng(Object.values(userCoords))
      this.zoom = 13
    }
  },
  mounted() {
    //console.log(this.$store.state.userLocationData)
  },
  methods: {
    doSomethingOnReady() {
      this.map = this.$refs.map.mapObject
    }
  }
}
</script>

<style lang="postcss" scoped>
#mapScreenContainer {
  @apply flex h-full flex-col;
  @screen sm {
    @apply grid-cols-2 grid-rows-1;
  }
}
#mapGridItem {
  @apply overflow-hidden row-auto;
}

#mapMask {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  position: fixed;
  height: 50vh;
  overflow: hidden;
  width: 100%;
  &.full {
    height: 100vh !important;
  }
}

#map {
  height: 100vh;
}

#stationGridItem {
  @apply absolute w-full px-2 overflow-y-scroll bottom-0;
}

#filterGridItem {
  @apply absolute w-full bottom-1/2;
}

#filterContainer {
  @apply flex flex-row justify-between content-center p-3 px-4 bg-white text-base;
}
.filterLink {
  &.active {
    @apply font-medium text-primary;
  }
}
</style>
