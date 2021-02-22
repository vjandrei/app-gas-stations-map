<template>
  <div>
    <div id="listHeading">
      <div id="listHeadingContainer">
        <div id="listHeadingContent">
          <span id="listHeadingText">Lähimmät kaasuasemat</span>
        </div>
      </div>
    </div>
    <div
      class="stationListItemCard"
      v-for="station in stations.slice(0, 2)"
      :key="station.id"
    >
      <div v-if="showCard" class="stationListItemCardContent">
        <div class="stationMinDetails" @click="showMarker(station)">
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
        <transition name="stationFullDetails-fade">
          <div class="stationFullDetails" v-if="showCardDetails">
            <dl>
              <dt>Tuottee</dt>
              <dd>
                <span v-for="(product, i) in station.products" :key="product[i]"
                  >{{ product != '' && i != 0 ? ',' : '' }} {{ product }}</span
                >
              </dd>
              <dt>Maksuvaihtoehdot</dt>
              <dd>
                <span v-for="(payment, i) in station.payments" :key="payment[i]"
                  >{{ payment != '' && i != 0 ? ',' : '' }} {{ payment }}</span
                >
              </dd>
              <dt>Operaattori</dt>
              <dd>{{ station.operator }}</dd>
            </dl>
            <div class="navigationActions">
              <button class="smallButton">Paikanna</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stations: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  emits: ['my-event'],
  computed: {
    showCard() {
      if (Object.keys(this.$store.state.showStation).length !== 0) {
        return true
      } else {
        return false
      }
    },
    showCardDetails() {
      return this.$store.state.showStationDetails
    },
  },
  created() {},
  mounted() {},
  methods: {
    showMarker(station) {
      this.$nuxt.$emit('show-station-marker', station)
    },
  },
}
</script>

<style lang="postcss" scoped>
#listHeading {
  @apply bg-light py-4;
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
}
.stationListItemCardContent {
  @apply flex flex-col leading-tight font-normal text-xs text-default font-display;
  .stationMinDetails {
    @apply flex flex-row w-full;
  }
  .stationGeneralDetails {
    @apply flex flex-grow flex-col pr-4 border-r border-gray-300;
    h2 {
      @apply text-primary text-base;
    }
  }
  .stationLocationDetails {
    @apply flex flex-grow-0 flex-row pl-4 items-center;
  }
  .stationFullDetails {
    @apply pt-4 border-t border-gray-300;
  }
  dl {
    @apply flex leading-tight font-normal text-sm font-display;
    dt {
      @apply w-1/2 flex-none text-default my-2;
    }
    dd {
      @apply text-dark my-2 font-normal;
    }
  }
  .navigationActions {
    @apply w-full py-2 pb-0;
  }
}
.stationFullDetails-fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.stationFullDetails-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.stationFullDetails-fade-enter, .stationFullDetails-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
