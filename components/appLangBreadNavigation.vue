<template>
  <div class="flex flex-wrap justify-between">
    <!-- buttons theme switch  -->
    <div class="w-1/2 lg:w-5/12">
      <nav class="flex flex-wrap py-2">
        <nuxt-link :to="localePath('index')">
          <span
            class="flex items-center justify-center h-10 px-4 align-middle rounded-lg mx-1"
            >{{ $t('pages.home') }}
          </span>
        </nuxt-link>

        <nuxt-link :to="localePath('about')">
          <span
            class="flex items-center justify-center h-10 px-4 align-middle rounded-lg mx-1"
            >{{ $t('pages.about') }}
          </span>
        </nuxt-link>

        <nuxt-link :to="localePath('contact')">
          <span
            class="flex items-center justify-center h-10 px-4 align-middle rounded-lg mx-1"
            >{{ $t('pages.contact') }}
          </span>
        </nuxt-link>
      </nav>
    </div>
    <!-- buttons size switch  -->
    <div class="w-1/2 lg:w-5/12">
      <nav class="flex flex-wrap justify-end">
        <nuxt-link
          class="w-auto py-2 bg-white rounded-l-lg"
          :to="localePath('fi')"
          ><span
            class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current mx-2"
            >FI
          </span></nuxt-link
        >
        <nuxt-link
          class="w-auto py-2 bg-white rounded-r-lg"
          :to="switchLocalePath('en')"
          ><span
            class="flex items-center justify-center h-10 px-4 align-middle rounded-lg fill-current mx-2"
            >EN</span
          ></nuxt-link
        >
      </nav>
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

<style lang="postcss"></style>
