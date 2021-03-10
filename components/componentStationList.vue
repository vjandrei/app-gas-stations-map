<template>
  <div id="list">
    <div id="listHeading">
      <div id="listHeadingContainer">
        <div id="listHeadingContent">
          <span id="listHeadingText">Lähimmät kaasuasemat</span>
        </div>
      </div>
    </div>
    <span :class="showList">
      <div
        class="stationListItemCard"
        style="max-height: 6rem"
        v-for="station in stations"
        :key="station.id"
      >
        <div class="stationListItemCardContent">
          <div class="stationMinDetails" @click="getStation(station)">
            <div class="stationGeneralDetails">
              <h2>{{ station.name }}</h2>
              <h4>{{ station.address }}</h4>
            </div>
            <div class="stationLocationDetails space-x-1">
              <i class="icon-location text-primary"></i>
              <h5>Sijainnista</h5>
              <span>{{ (station.distance / 1000).toFixed(1) }} km</span>
            </div>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    stations: {
      type: Array,
    },
  },
  data() {
    return {
      station: this.stations.length,
    }
  },
  computed: {
    ...mapGetters({
      loading: 'PASS_LOADING_STATUS',
    }),
    showList() {
      return this.loading ? 'hidden' : 'block'
    },
  },
  created() {},
  mounted() {},
  methods: {
    getStation(station) {
      console.log(station);
      this.$nuxt.$emit('select-station', station)
      this.$store.dispatch('GET_SELECTED_MARKER', station)
      this.$store.dispatch('SET_STATION_CARD', true)
      
    },
  },
}
</script>

<style lang="postcss" scoped>
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
    @apply text-base text-gray-500 ;
  }
}
#listHeading {
  @apply bg-light py-4 sticky z-30 top-0 w-full;
  #listHeadingContainer {
    @apply relative h-px bg-gray-300;
  }
  #listHeadingContent {
    @apply absolute left-0 top-0 flex justify-center w-full -mt-2;
  }
  #listHeadingText {
    @apply bg-light px-4 text-xs text-gray-500 uppercase;
  }
}
.stationListItemCard {
  @apply bg-white p-4 border-b;
  animation-name: animateIn;
  animation-duration: 250ms;
  animation-delay: calc(10 * 25ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}
.stationListItemCardContent {
  @apply flex flex-col leading-tight font-normal text-xs text-default font-display;
  .stationMinDetails {
    @apply flex flex-row w-full;
  }
  .stationGeneralDetails {
    @apply flex flex-grow-0 w-48 flex-col pr-4 border-r border-gray-300;
    h2 {
      @apply text-primary text-base;
    }
  }
  .stationLocationDetails {
    @apply flex flex-grow-0 flex-row pl-4 items-center;
  }
}
</style>
