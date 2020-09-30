<template>
  <div>
    <nav class="fixed z-10 bg-white">
      <div class="cta-item"></div>
      <div id="appTitle">
        Kaasuasemat
      </div>
      <div class="cta-item"></div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
nav {
  @apply flex w-full pt-2 pb-2 justify-center items-center content-center text-center border-solid border-b border-gray-200 font-semibold;
}
#appTitle {
  @apply flex-1;
}
.cta-item {
  @apply flex-1;
}
</style>
