export const state = () => ({
  message: 'Hello Vuex state!',
  aboutApp: 'Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat ympäri maailmaa.',
  locationTipMessage: 'Jotta asemat tulisi sovellukseen sinun on annettava oikeus sovellukselle käyttääkseen paikannustietoja.',

  userLocation: false,
  userLocationData: []
})

/**
 * Functions
 */

const getGeoLocation = () => {
  if (process.client) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        pos => {
          resolve(pos)
        },
        err => {
          reject(err)
        }
      )
    })
  }
}

/**
 * Mutations: Sets states
 */

export const mutations = {
  SET_LOADING_STATUS(state, payload) {
    state.userLocation = payload
  },
  SET_USER_LOCATION_DATA(state, coords) {
    state.userLocationData.push({
      coords
    })
  }
}

/**
 * Actions: Adds data
 * fetchFromNavigator:
 * 1. SET_LOADING_STATUS true
 * 2. SET_USER_LOCATION_DATA to Object
 * 3. SET_USER_LOCATION_STATUS to true
 */

export const actions = {
  fetchFromNavigator(context) {
    context.commit('SET_LOADING_STATUS', true)
    getGeoLocation()
      .then(pos => {
        context.commit('SET_USER_LOCATION_DATA', {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        }),
          localStorage.setItem('userCoords', {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  },
  setNearestLocation({ state, commit }, value) {
    if (state.userLocationData) {
      commit('SET_NEAREST_LOCATION_DATA', {
        name: value.name,
        address: value.address,
        coords: value.coords,
        distance: value.distance
      })
    }
  }
}

//showing things, not mutating state
export const getters = {
  hasUserlocation: state => {
    return state.gettingLocation
  }
}
