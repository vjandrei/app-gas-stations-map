export const state = () => ({
  locations: [],
});

export const mutations = {
  add(state, geolocations) {
    state.locations.push({
      geolocations,
    });
  },
};
