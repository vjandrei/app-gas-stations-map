<template>
  <div id="mapItems">
    <ComponentMap />
    <ComponentFilter />
    <div id="list">
      <div id="listHeading">
        <div id="listHeadingContainer">
          <div id="listHeadingContent">
            <span id="listHeadingText">{{ $t('map.listHeading') }}</span>
          </div>
        </div>
      </div>
      <span :class="showList">
        <ComponentStationListItem
          v-for="(station, index) in stations"
          :key="index"
          :station="station"
        />
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'map',
  nuxtI18n: {
    paths: {
      fi: '/kartta',
      en: '/map',
    },
  },
  data() {
    return {
      selectedStation: null,
    }
  },
  mounted() {
    this.$nuxt.$on('select-station', (station) => {
      this.selectedStation = station
    })
  },
  computed: {
    ...mapGetters({
      stations: 'PASS_STATIONS',
      loading: 'PASS_LOADING_STATUS',
    }),
    showList() {
      return this.loading ? 'hidden' : 'block'
    },
  },
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

@keyframes animateIn {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }

  100% {
    opacity: 1;
  }
}
@keyframes loading {
  0% {
    content: 'Ladataan.';
  }
  50% {
    content: 'Ladataan..';
  }
  100% {
    content: 'Ladataan...';
  }
}

#list {
  @apply relative;
  height: 200px;
  overflow-y: scroll;
  &:after {
    content: '';
    animation: loading 3s linear infinite alternate;
    position: absolute;
    display: block;
    right: 0;
    top: 50%;
    left: 0;
    margin: auto;
    text-align: center;
    min-width: 200px;
    height: 200px;
    z-index: -10;
    @apply text-base text-secondary_dark;
  }
  @screen lg {
    height: calc(100vh - 42px);
    grid-column: 2;
    grid-row: 2;
    overflow-y: scroll;
  }
}

#listHeading {
  @apply bg-secondary_light py-4 sticky top-0 w-full;
  #listHeadingContainer {
    @apply relative h-px bg-secondary_default;
  }
  #listHeadingContent {
    @apply absolute left-0 top-0 flex justify-center w-full -mt-2;
  }
  #listHeadingText {
    @apply bg-secondary_light px-4 text-xs text-secondary_dark uppercase;
  }
}
</style>
