<template>
  <div id="app">
    <AppNavigation />
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
#app{
  @apply container mx-auto grid;
}
main{
  @apply container mx-auto p-4;
}
</style>
