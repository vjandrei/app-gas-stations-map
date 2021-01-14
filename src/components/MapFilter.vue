<template>
  <div class="filterLink" :class="{ active: isSelected }" v-on:click="selectFilter">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    selectedFilter: {
      type: String
    }
  },

  emits: {
    'selected-filter'(payload) {
      if (typeof payload.name === 'string' && payload.value) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    isSelected() {
      return this.value === this.selectedFilter
    }
  },
  methods: {
    selectFilter(filter) {
      this.$emit('sending-stations', {
        name: this.name,
        value: this.value
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.filterLink {
  @apply flex-1 text-center text-default font-medium uppercase text-xs;
  &.active {
    @apply text-primary;
    span {
      @apply px-1 pb-2 w-full;
      box-shadow: inset 0 -0.125em 0 0 #fff, inset 0 -0.275em 0 0 rgba(35, 136, 204, 1);
    }
  }
}
</style>
