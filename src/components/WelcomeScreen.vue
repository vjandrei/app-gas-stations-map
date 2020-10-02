<template>
  <div class="container mx-auto p-6">
    <h1 class="mx-auto text-xl font-bold mb-4">Kaasun tankkaaminen</h1>

    <p class="mb-4">
      Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat
      ympäri maailmaa.
    </p>
    <button
      class="mx-auto w-full text-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-4 px-4 rounded"
      @click="getLocation"
    >
      <span v-if="showLocationLoading">Haetaan paikkatietoja</span>
      <span v-else>Paikanna minut</span>
    </button>
    <p class="mt-4 text-xs text-white font-normal text-center">
      Jotta asemat tulisi sovellukseen sinun on annettava oikeus sovellukselle
      käyttääkseen paikannustietoja.
    </p>
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
      this.$store.dispatch('fetchFromNavigator');
    },
  },
};
</script>

<style lang="postcss" scoped></style>
