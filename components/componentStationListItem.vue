<template>
    <div>
      <div
        class="stationListItemCard"
        style=""
      >
        <div class="stationListItemCardContent">
          <div class="stationMinDetails" @click="getStation(station)">
            <div class="stationGeneralDetails">
              <h2>{{ station.name }}</h2>
              <h4><i class="icon-location mr-1"></i> {{ station.address }}</h4>
            </div>
            
            <div class="stationLocationDetails space-x-1">
              <h5>Sijainnista</h5>
              <span>{{ (station.distance / 1000).toFixed(1) }} km</span>
            </div>
            <div v-show="isSelected">
              <dl>
              <dt>Tuotteet:</dt>
              <dd>
                <span v-for="(product, i) in station.products" :key="product[i]"
                  >{{ product != '' && i != 0 ? ',' : '' }} {{ product }}</span
                >
              </dd>
              <dt>Maksuvaihtoehdot:</dt>
              <dd>
                <span v-for="(payment, i) in station.payments" :key="payment[i]"
                  >{{ payment != '' && i != 0 ? ',' : '' }} {{ payment }}</span
                >
              </dd>
              <dt>Operaattori:</dt>
              <dd>{{ station.operator }}</dd>
            </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    station: {
      type: Object,
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
      ...mapGetters({
      selectedStation: 'PASS_STATION',
    }),
    isSelected(){
      return this.station === this.selectedStation
    }
  },
  created() {},
  mounted() {},
  methods: {
    getStation(station) {
      this.$nuxt.$emit('select-station', station)
      this.$nuxt.$emit('show-marker', station)
      this.$store.dispatch('GET_SELECTED_MARKER', station)
      this.isOpen = !this.isOpen;
    }
  },
}
</script>

<style lang="postcss" scoped>
.stationListItemCard {
  @apply bg-white p-4 border-b;
  animation-name: animateIn;
  animation-duration: 250ms;
  animation-delay: calc(10 * 25ms);
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}
.stationListItemCardContent {
  @apply flex flex-col leading-tight font-normal text-xs text-default font-display cursor-pointer;
  .stationMinDetails {
    @apply flex flex-col w-full;
  }
  .stationGeneralDetails {
    @apply flex flex-col pr-4;
    h2 {
      @apply text-primary mb-2 text-base;
    }
    h4 {
      @apply mb-2 text-fade;
    }
  }
  .stationLocationDetails {
    @apply flex flex-grow-0 text-fade flex-row items-center;
    .icon-location {
      @apply text-fade mr-1;
    }
  }
}
.stationOtherDetails {
  @apply pt-4 border-t border-gray-300;
}
dl {
  @apply flex leading-tight font-normal text-sm font-display;
  dt {
    @apply w-1/2 flex-none my-2 text-fade;
  }
  dd {
    @apply text-dark my-2 font-normal;
  }
}
</style>
