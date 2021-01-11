<template>
  <div class="filterLink" :class="{ active: isSelected }" v-on:click="selectFilter">
    {{ name }}
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
      this.$emit('sending-filter', {
        name: this.name,
        value: this.value
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.filterLink {
  &.active {
    @apply font-medium text-primary;
  }
}
</style>
