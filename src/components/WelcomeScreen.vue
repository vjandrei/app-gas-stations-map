<template>
  <div id="welcomeScreen">
    <div class="container mx-auto pt-6 text-center">
      <h1 class="mx-auto text-xl font-bold mb-4">Kaasun tankkaaminen</h1>
      <p class="mb-4">
        Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat
        ympäri maailmaa. Jotta asemat tulisi sovellukseen sinun on annettava
        oikeus sovellukselle käyttääkseen paikannustietoja.
      </p>
      <button
        class="mx-auto text-center bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded"
        @click="getLocation"
      >
        <span v-if="showLocationLoading">Haetaan paikkatietoja</span>
        <span v-else>Paikanna minut</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    showLocationLoading() {
      return this.$store.state.loadLocation;
    },
  },
  methods: {
    async getLocation() {
      this.$store.dispatch("fetchFromNavigator");
    },
  },
};
</script>

<style lang="postcss" scoped>
#welcomeScreen {
  height: 100vh;
  width: inherit;
}
</style>

