<template>
  <div id="appNavigation">
    <!-- buttons theme switch  -->
    <nav
      class="flex flex-col md:flex-row md:items-center justify-between flex-wrap"
    >
      <div class="flex items-center flex-shrink-0 mr-6">
        <nuxt-link :to="localePath('index')">
          <img
            class="w-32"
            src="~/assets/img/kaasulla-logo.svg"
            alt="Kaasulla-logo"
          />
        </nuxt-link>
      </div>
      <div
        class="flex md:flex-row md:items-center md:flex-grow justify-between mt-4 md:mt-0"
      >
        <div class="md:flex-grow flex space-x-4 md:w-full">
          <nuxt-link
            :to="localePath('about')"
            class="md:inline-block md:mt-0 hover:text-primary_dark"
          >
            <span>{{ $t('pages.about') }} </span>
          </nuxt-link>
          <nuxt-link
            :to="localePath('map')"
            class="md:inline-block md:mt-0 hover:text-primary_dark"
          >
            <span>{{ $t('pages.map') }} </span>
          </nuxt-link>
          <nuxt-link
            :to="localePath('contact')"
            class="md:inline-block md:mt-0 hover:text-primary_dark"
          >
            <span>{{ $t('pages.contact') }} </span>
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
  @apply top-0 left-0 py-2 w-full;
}
#navStyle {
  @apply flex py-2;
}
</style>
