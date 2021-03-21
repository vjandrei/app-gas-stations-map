<template>
  <div id="mapItems">
    <ComponentMap />
    <ComponentFilter />
    <ComponentStationList :stations="stations" />
    <appNavigation />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  components: {},
  created() {},
  computed: {
    ...mapGetters({
      stations: 'PASS_STATIONS',
    }),
  },
  methods: {},
}
</script>

<style lang="postcss" scoped>
#mapItems {
  display: grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 100%;
  @screen lg {
    height: 100vh; /* <- does the trick */
    grid-template-columns: [map-area] 1fr [sidebar-area] 400px;
    grid-template-rows: [sidebar-start] auto [sidebar-top] auto [sidebar-middle] 1fr [sidebar-bottom] auto [sidebar-end];
  }
}
</style>
