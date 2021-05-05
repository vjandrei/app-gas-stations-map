<template>
  <div id="appNavigation">
    <!-- buttons theme switch  -->
    <div class="flex">
      <div class="w-2/3 lg:w-5/12">
        <nav id="navStyle">
          <nuxt-link :to="localePath('index')">
            <span
              class="flex items-center h-10 px-1 align-middle rounded-lg mx-1 md:px-4"
              >{{ $t('pages.home') }}
            </span>
          </nuxt-link>
          <nuxt-link :to="localePath('about')">
            <span
              class="flex items-center h-10 px-1 align-middle rounded-lg mx-1 md:px-4"
              >{{ $t('pages.about') }}
            </span>
          </nuxt-link>
          <nuxt-link :to="localePath('contact')">
            <span
              class="flex items-center h-10 px-1 align-middle rounded-lg mx-1 md:px-4"
              >{{ $t('pages.contact') }}
            </span>
          </nuxt-link>
        </nav>
      </div>
      <!-- buttons size switch  -->
      <div class="w-1/3 lg:w-5/12">
        <nav class="flex flex-wrap justify-end">
          <nuxt-link
            class="w-auto py-2 bg-white rounded-l-lg"
            :to="switchLocalePath('fi')"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current md:mx-2"
              >FI
            </span></nuxt-link
          >
          <nuxt-link
            class="w-auto py-2 bg-white rounded-r-lg"
            :to="switchLocalePath('en')"
            ><span
              class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current md:mx-2"
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
#appNavigation{
  @apply  top-0 left-0 mb-4 border-b border-gray-100 py-2 bg-white w-full ;
}
#navStyle{
  @apply flex py-2;
}
</style>
