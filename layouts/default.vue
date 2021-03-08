<template>
  <main>
    <nuxt />
    <appNavigation />
  </main>
</template>

<script>
export default {
  components: {},
}
</script>

<style lang="postcss" scoped>
main {
  @apply min-h-full grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
}
</style>
