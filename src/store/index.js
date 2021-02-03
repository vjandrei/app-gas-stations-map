/** Initial state */
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

const addToSessionStorage = (lat, lng) => {
  const key = 'userCoords'
  const coords = JSON.stringify({
    lat: lat,
    lng: lng
  })
  try {
    if (!window.sessionStorage) {
      return false
    }
    sessionStorage.setItem(key, coords)
    console.log(`Added to Session Storage: '${key}'`)
    return true
  } catch (ex) {
    console.error(`*** SessionStorage: '${ex.name}' ***`, ex)
    alert('Virhe: Et ole sallinut sovelluksen paikkatieto tallennusta')
    return false
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
        context.commit(
          'SET_USER_LOCATION_DATA',
          {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
          },
          addToSessionStorage(pos.coords.latitude, pos.coords.longitude)
        )
        this.$router.push('/map')
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {})
  },
  GET_FILTER(context, filter) {
    context.commit('SET_FILTER', filter)
  },
  GET_USER_SESSION_LOCATION_DATA(context, location) {
    context.commit('SET_USER_SESSION_LOCATION_DATA', location)
  }
}

/**
 * Mutations: Sets states
 */
export const mutations = {
  SET_LOADING_STATUS(state, payload) {
    state.userLocation = payload
  },
  SET_USER_LOCATION_DATA(state, payload) {
    state.userLocationData = payload
  },
  SET_FILTER(state, payload) {
    state.stationFilter = payload
  },
  SET_USER_SESSION_LOCATION_DATA(state, payload) {
    state.userLocationData = payload
  }
}

//showing things, not mutating state
export const getters = {
  PASS_FILTER: state => {
    return state.stationFilter
  },
  PASS_STATIONS(state, getters, rootState, rootGetters) {
    const filterSelected = rootState.stationFilter !== 'all'
    const filteredStations = rootState.stations.data.filter(s => s.type.includes(rootState.stationFilter))
    return filterSelected ? filteredStations : rootState.stations.data
  },
  PASS_USERLOCATION: state => {
    return state.userLocationData
  }
}
