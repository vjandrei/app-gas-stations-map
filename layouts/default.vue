<template>
  <div id="app">
    <main>
      <AppNavigation />
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="postcss" scoped>
main {
  @apply container mx-auto p-3  min-h-full grid text-secondary;
  grid-template-rows: auto 1fr;
  grid-template-columns: 100%;
}
</style>
