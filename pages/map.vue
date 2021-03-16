<template>
  <div id="mapItems">
    <div id="mapItem">
      <ComponentMap />
    </div>
    <div id="filterItem">
      <ComponentFilter />
    </div>
    <div id="listItem">
      <ComponentStationList :stations="stations" />
    </div>
    <div id="navItem">
      <appNavigation />
    </div>
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

#mapItem {
  @screen lg {
    grid-column: 1;
    grid-row: 1/4;
  }
}

#filterItem {
  @screen lg {
    grid-column: 2;
    grid-row: 1;
  }
}

#listItem {
  @screen lg {
    grid-column: 2;
    grid-row: 2;
    overflow-y: scroll;
  }
}

#navItem {
  @screen lg {
    grid-column: 2;
    grid-row: 3;
  }
}
</style>
