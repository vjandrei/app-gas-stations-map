<template>
  <nav>
    <div class="navLink">
      <i class="icon-gas-station"></i>
    </div>
    <div>
      <h1>Kaasulla.app</h1>
    </div>
    <div class="navLink">
      <i class="icon-car"></i>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {}
  },

  components: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {},
}
</script>

<style lang="postcss" scoped>
nav {
  @apply relative w-full bg-primary flex justify-between px-6 py-1 text-center;
  .navLink {
    @apply flex-none flex justify-center content-center items-center text-white;
  }
  #formInput {
    @apply w-full px-6 flex items-center;
  }
  span {
    @apply absolute text-white text-base items-center justify-center w-8 pl-4;
  }
  h1 {
    @apply flex-grow w-full py-2 px-4 text-base text-white text-center font-display;
  }
  input {
    @apply flex-grow w-full py-2 px-4 text-sm border border-gray-300 border-solid rounded;
  }
}
</style>
