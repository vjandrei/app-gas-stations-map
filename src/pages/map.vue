<template>
  <div>
    <div class="container mx-auto">
      <nuxt-link to="/">Home</nuxt-link>
      <div class="view1">View1 Opacity</div>
      <div class="view2">View2 Rigt to Left</div>
      <h1 class="animate__animated animate__bounce">An animated element</h1>
    </div>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'map',
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  computed: {},
  methods: {},
};
</script>

<style lang="postcss" scoped></style>
