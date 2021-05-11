<template>
  <div id="appNavigation">
    <!-- buttons theme switch  -->
    <nav
      class="flex flex-col md:flex-row md:items-center justify-between flex-wrap pb-2"
    >
      <div
        class="flex md:flex-row md:items-center md:flex-grow justify-between md:my-0"
      >
        <div class="md:flex-grow flex space-x-4 md:w-full">
          <nuxt-link :to="localePath('index')">
            <img
              class="w-32"
              src="~/assets/img/kaasulla-logo.svg"
              alt="Kaasulla-logo"
            />
          </nuxt-link>
        </div>
        <div class="md:flex-grow flex space-x-4">
          <nuxt-link class="w-auto block" :to="switchLocalePath('fi')"
            ><span
              class="langLink md:inline-block md:mt-0 hover:text-primary_dark"
              >Fin
            </span></nuxt-link
          >
          <nuxt-link class="w-auto block" :to="switchLocalePath('en')"
            ><span
              class="langLink mt-4 md:inline-block md:mt-0 hover:text-primary_dark"
              >Eng</span
            ></nuxt-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    navigationToggle() {
      this.show = !this.show
    },
  },
}
</script>

<style lang="postcss" scoped>
#appNavigation {
  @apply my-2 top-0 left-0 w-full pt-0;
  @screen md {
    @apply my-8;
  }
}
#navStyle {
  @apply flex py-2;
}
</style>
