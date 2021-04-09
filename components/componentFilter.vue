<template>
  <div id="filter">
    <div
      v-for="filter in filters"
      :filter="filter.value"
      class="filterLink"
      :class="{ active: filterFromStore == filter.value }"
      v-on:click="selectFilter(filter.value)"
      :key="filter.id"
    >
      <span>{{ filter.name }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      filters: [
        { name: 'Kaikki asemat', value: 'all', id: 1 },
        { name: 'Biokaasu', value: 'biogas', id: 2 },
        { name: 'Maakaasu', value: 'naturalgas', id: 3 },
      ],
      selectedFilter: '',
    }
  },
  computed: {
    ...mapGetters({
      filterFromStore: 'PASS_FILTER',
    }),
  },
  methods: {
    selectFilter(value) {
      this.$store.dispatch('GET_FILTER', value)
    },
  },
}
</script>

<style lang="postcss" scoped>
#filter {
  @apply flex flex-row justify-between content-center py-3 bg-white text-base cursor-pointer;
  box-shadow: 0 0 10px 0 rgba(230, 230, 230, 0.5);
  @screen lg {
    grid-column: 2;
    grid-row: 1;
  }
}
.filterLink {
  @apply flex-1 text-center text-secondary_dark font-medium uppercase text-xs;
  &.active {
    @apply text-primary_default;
    span {
      @apply px-1 pb-2 w-full;
      box-shadow: inset 0 -0.125em 0 0 #fff,
        inset 0 -0.275em 0 0 rgba(0, 69, 191, 1);
    }
  }
}
</style>
