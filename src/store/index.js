export const state = () => ({
  aboutApp: 'Kaasuasemat on karttapohjainen sovellus josta löydät kaasuautoilu asemat ympäri maailmaa.',
  locationTipMessage: 'Jotta asemat tulisi sovellukseen sinun on annettava oikeus sovellukselle käyttääkseen paikannustietoja.',
  userLocation: false,
  userLocationData: [],
  stationFilter: 'all'
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
 * Actions:
 * fetchFromNavigator:
 * 1. SET_LOADING_STATUS true
 * 2. SET_USER_LOCATION_DATA to Object
 */

export const actions = {
  GET_FROM_NAVIGATOR(context) {
    context.commit('SET_LOADING_STATUS', true)
    getGeoLocation()
      .then(pos => {
        context.commit('SET_USER_LOCATION_DATA', {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude
        })
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        this.$router.push('/map')
      })
  },
  GET_FILTER(context, filter) {
    context.commit('SET_FILTER', filter)
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
    sessionStorage.setItem('userCoords', JSON.stringify(coords))
    state.userLocationData = coords
  },
  SET_FILTER(state, payload) {
    state.stationFilter = payload
  }
}

//showing things, not mutating state
export const getters = {
  PASS_FILTER: state => {
    return state.stationFilter
  }
}
