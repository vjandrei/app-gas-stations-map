<template>
  <div id="locator">
    <button id="newLocation" @click="getNewLocation">
      <i class="icon-crosshairs text-primary_dark"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  methods: {
    async getNewLocation() {
      this.$emit('new-location')
    },
  },
}
</script>

<style lang="postcss" scoped>
#locator {
  @apply self-center;
}
#newLocation {
  @apply absolute z-10 right-0 w-12 h-12 rounded-full bg-white my-3 mx-3 flex justify-center items-center;
  box-shadow: 0 0px 0px 7px rgb(180 194 213 / 5%);
  top: 36px;
  @screen lg {
    right: 400px;
  }
  i {
    font-size: 24px;
    @apply text-primary_default;
  }
}
</style>
