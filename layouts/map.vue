<template>
  <div>
    <main>
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
  @apply min-h-full grid text-secondary;
  grid-template-rows: 1fr;
  grid-template-columns: 100%;
}
</style>
