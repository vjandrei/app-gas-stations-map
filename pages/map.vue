<template>
  <div id="mapScreen" key="map">
    <Map />
  </div>
</template>

<script>
import Map from '@/components/Map'
export default {
  data() {
    return {}
  },
  components: {
    Map
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style lang="postcss" scoped>
#mapScreen {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
}
</style>
