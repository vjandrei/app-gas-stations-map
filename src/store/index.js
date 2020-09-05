export const state = () => ({
  message: 'Hello Vuex state!',
  locations: [],
});

export const mutations = {
  add(state, geolocations) {
    state.locations.push({
      geolocations,
    });
  },
};
