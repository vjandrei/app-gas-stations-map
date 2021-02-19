<template>
  <div id="appWrapper">
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
    Map,
  },
  created() {},
  computed: {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
#map {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  transform: scale(1);
  height: 100vh;
  width: 100%;
  position: absolute;
  @screen sm {
    @apply relative;
  }
}
</style>
