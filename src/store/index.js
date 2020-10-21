export const state = () => ({
  message: 'Hello Vuex state!',
  userLocation: [],
  isLocation: false,
  gettingLocation: true,
  hasUserlocation: false,
  loadLocation: false,
  showMore: false,
  gasStations: [],
  markerLocation: []
});

const pingGeoLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

export const mutations = {
  add(state, coords) {
    state.userLocation.push({
      coords,
    });
  },
  getLocation(state) {
    state.gettingLocation = false;
    state.hasUserlocation = true;
  },
  loadLocation(state, payload) {
    state.loadLocation = payload;
  },
  getStation(state, value) {
    state.markerLocation = value;
    state.showMore = true;
  }
};

export const actions = {
  fetchFromNavigator(context) {
    context.commit('loadLocation', true);
    pingGeoLocation()
      .then((pos) => {
        context.commit('add', {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        context.commit('getLocation');
      })
      .finally(() => {
        context.commit('loadLocation', false);
      });
  },
  updateStation({state, commit}, value){
    if (state.markerLocation) {
      commit('getStation', value)
    }
  }

};


//showing things, not mutating state
export const getters = {
  hasUserlocation: (state) => {
    return state.gettingLocation;
  }
};



