<template>
  <nav>
    <div class="navLink">
      
    </div>
    <div>
      <img  src="~/assets/img/kaasulla-logo-small-white.svg" alt="">
    </div>
    <div class="navLink">
      
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
  @apply relative w-full h-12 bg-primary flex justify-between px-6 py-1 text-center;
  @screen lg {
    grid-column: 2;
    grid-row: 3;
  }
  .navLink {
    @apply flex-none flex justify-center content-center items-center text-white;
  }
  #formInput {
    @apply w-full px-6 flex items-center;
  }
  span {
    @apply absolute text-white text-base items-center justify-center w-8 pl-4;
  }
  img {
    @apply flex-grow w-full py-2 px-4 text-center;
  }
  input {
    @apply flex-grow w-full py-2 px-4 text-sm border border-gray-300 border-solid rounded;
  }
}
</style>
