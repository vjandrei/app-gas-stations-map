export const state = () => ({
  message: 'Hello Vuex state!',
  locations: [],
  isLocation: false,
  gettingLocation: true,
  hasUserlocation: false,
});

//showing things, not mutating state
export const getters = {
  hasUserlocation: (state) => {
    return state.gettingLocation;
  },
};

export const actions = {
  fetchFromnNavigator(context) {
    context.commit('getLocation');
  },
};

export const mutations = {
  add(state, geolocations) {
    state.locations.push({
      geolocations,
    });
  },
  getLocation(state) {
    state.gettingLocation = false;
    state.hasUserlocation = true;
  },
};
