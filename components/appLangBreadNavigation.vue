<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap justify-between px-8 py-12">
      <!-- buttons theme switch  -->
      <div class="w-1/2 lg:w-5/12">
        <nav class="flex flex-wrap py-2"></nav>
      </div>
      <!-- buttons size switch  -->
      <div class="w-1/2 lg:w-5/12">
        <nav class="flex flex-wrap justify-end">
          <nuxt-link
            class="w-auto py-2 bg-white rounded-l-lg"
            :to="switchLocalePath('fi')"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current"
              >FI
            </span></nuxt-link
          >
          <nuxt-link
            class="w-auto py-2 bg-white rounded-r-lg"
            :to="switchLocalePath('en')"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current"
              >EN</span
            ></nuxt-link
          >
        </nav>
      </div>
    </div>
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
.nuxt-link-active span {
  @apply text-white bg-primary_dark;
}
</style>
