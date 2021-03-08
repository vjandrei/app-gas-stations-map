<template>
  <nav>
    <div id="navLink1" class="navLink"><i class="icon-list"></i></div>
    <div id="formInput">
      <span>
        <i class="icon-location"></i>
      </span>
      <h1>Kaasulla.fi</h1>
    </div>
    <div id="navLink2" class="navLink"><i class="icon-car"></i></div>
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
  @apply relative w-full bg-primary flex justify-between px-6 py-2;
  @screen sm {
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
  h1 {
    @apply flex-grow w-full py-2 px-4 pl-10 text-base text-white text-center;
  }
  input {
    @apply flex-grow w-full py-2 px-4 pl-10 text-sm border border-gray-300 border-solid rounded;
  }
}
</style>
