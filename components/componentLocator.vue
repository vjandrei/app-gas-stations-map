<template>
  <div id="locator">
    <button id="newLocation" @click="getNewLocation">
      <i class="icon-location"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    async getNewLocation() {
      this.$emit('new-location')
      /*
      this.$store.dispatch('GET_LOCATION_AND_DISTANCE').then(() => {})
      this.$store.dispatch('SET_STATION_DETAILS')
      this.$nextTick(() => {
        this.$refs.map.mapObject.fitBounds(
          [[this.userlocation.latitude, this.userlocation.longitude]],
          {
            maxZoom: 15,
          }
        )
      })
      */
    },
  },
}
</script>

<style lang="postcss" scoped>
#newLocation {
  @apply absolute z-50 right-0 w-12 h-12 rounded-full bg-white my-3 mx-3 flex justify-center items-center;
  box-shadow: 0 0px 0px 7px rgb(180 194 213 / 5%);
  i {
    font-size: 24px;
    @apply text-primary;
  }
}
</style>
