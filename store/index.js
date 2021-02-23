/** Initial state */
export const state = () => ({
  userLocation: false,
  userLocationData: [],
  stationFilter: 'all',
  showStation: {},
  showStationDetails: false,
  defaultLocation: [63.3941186, 24.7088464],
  defaulListStatus: 10,
})

/**
 * Functions
 */

const getGeoLocation = () => {
  if (process.client) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos)
        },
        (err) => {
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
    lng: lng,
  })
  try {
    if (!window.sessionStorage) {
      return false
    }
    sessionStorage.setItem(key, coords)
    console.log(`Added to Session Storage: '${key}'`)
    return true
  } catch (er) {
    console.error(`*** SessionStorage: '${er.name}' ***`, er)
    alert('Virhe: Et ole sallinut sovelluksen paikkatieto tallennusta')
    return false
  }
}

/**
 * Actions:
 */

export const actions = {
  async GET_LOCATION_AND_DISTANCE({ dispatch, commit, state }) {
    commit('SET_LOADING_STATUS', true)
    await dispatch('GET_FROM_NAVIGATOR').then(() => {
      const userLocation = [
        state.userLocationData.latitude,
        state.userLocationData.longitude,
      ]
      const distances = state.stations.data.map((item) => ({
        ...item,
        distance: L.latLng(userLocation).distanceTo(
          L.latLng([item.coords.lat, item.coords.lng])
        ),
      }))
      const sortedDistances = distances.sort((a, b) => a.distance - b.distance)
      commit('SET_DISTANCE', sortedDistances)
      commit('SET_SELECTED_STATION', sortedDistances[0])
    })
  },
  async GET_FROM_NAVIGATOR(context) {
    await getGeoLocation()
      .then((pos) => {
        context.commit(
          'SET_USER_LOCATION_DATA',
          {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          },
          addToSessionStorage(pos.coords.latitude, pos.coords.longitude)
        )
        this.$router.push('/map')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {})
  },
  GET_FILTER(context, filter) {
    context.commit('SET_FILTER', filter)
  },
  GET_USER_SESSION_LOCATION_DATA(context, location) {
    context.commit('SET_USER_SESSION_LOCATION_DATA', location)
  },
  GET_SELECTED_MARKER(context, station) {
    console.log(station)
    context.commit('SET_SELECTED_STATION', station)
  },
  SET_STATION_DETAILS(context) {
    context.commit('RESET_STATION_DETAILS')
  },
  SET_STATION_LIST(context) {
    context.commit('SET_STATION_LIST')
  },
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
  },
  SET_DISTANCE(state, payload) {
    state.stations.data = payload
  },
  SET_SELECTED_STATION(state, payload) {
    state.showStation = payload
  },
  SET_STATION_DETAILS(state) {
    state.showStationDetails = true
  },
  RESET_STATION_DETAILS(state) {
    state.showStationDetails = false
  },
  SET_STATION_LIST(state, payload) {
    state.defaulListStatus = payload
  },
}

//showing things, not mutating state
export const getters = {
  PASS_FILTER: (state) => {
    return state.stationFilter
  },
  PASS_STATIONS(state, getters, rootState, rootGetters) {
    const filterSelected = rootState.stationFilter !== 'all'
    const filteredStations = rootState.stations.data.filter((s) =>
      s.type.includes(rootState.stationFilter)
    )
    return filterSelected ? filteredStations : rootState.stations.data
  },
  PASS_USERLOCATION: (state) => {
    return state.userLocationData
  },
  PASS_STATION: (state) => {
    return state.showStation
  },
  PASS_DEFAULT_LOCATION: (state) => {
    return L.latLng(state.defaultLocation)
  },
}
