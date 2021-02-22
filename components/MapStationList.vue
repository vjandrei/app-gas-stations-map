<template>
  <div>
    <div class="stationListItemCard" v-if="showCard">
      <div class="stationListItemCardContent">
        <div class="stationMinDetails">
          <div class="stationGeneralDetails">
            <h2>{{ station.name }}</h2>
            <h4>{{ station.address }}</h4>
          </div>
          <div class="stationLocationDetails">
            <h5>
              Nykyisestä sijainista
              <span>{{ (station.distance / 1000).toFixed(1) }} km</span>
            </h5>
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
    station: {
      type: Object,
    },
  },
  data() {
    return {}
  },
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
  methods: {},
}
</script>

<style lang="postcss" scoped>
.stationListItemCard {
  @apply bg-white p-4 rounded-lg mt-2;
  box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.5);
}
.stationListItemCardContent {
  @apply flex flex-col;
  .stationMinDetails {
    @apply flex flex-row w-full pb-2;
  }
  .stationGeneralDetails {
    @apply flex flex-grow flex-col pr-4 border-r border-gray-300;
  }
  .stationLocationDetails {
    @apply flex flex-grow-0 flex-col pl-4;
  }
  h2 {
    @apply font-display leading-tight font-medium text-lg text-primary;
  }
  h4 {
    @apply text-sm;
  }
  h5 {
    @apply leading-tight font-normal text-xs text-default font-display;
    span {
      @apply block text-2xl font-semibold text-dark;
    }
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
