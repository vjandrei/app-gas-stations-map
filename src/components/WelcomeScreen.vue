<template>
  <div id="welcomeScreenContainer" class="prose prose-sm">
    <h1>Kaasun tankkaaminen</h1>
    <h4>
      Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat
      ympäri maailmaa.
    </h4>
    <button
      class="mx-auto w-full text-center bg-blue-500 hover:bg-blue-700 text-lg text-white font-bold py-4 px-4 rounded"
      @click="getLocation"
    >
      <span v-if="showLocationLoading">Haetaan paikkatietoja</span>
      <span v-else>Paikanna minut</span>
    </button>
    <p><small>
      Jotta asemat tulisi sovellukseen sinun on annettava oikeus sovellukselle
      käyttääkseen paikannustietoja.</small>
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
