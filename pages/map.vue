<template>
  <div id="mapItems">
    <ComponentMap />
    <ComponentFilter />
    <ComponentStationList :stations="stations" />
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
  @apply grid;
  grid-template-rows: 1fr auto auto;
  grid-template-columns: 100%;
}
</style>
