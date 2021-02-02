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

function saveUserCoords(lat, lng) {
  sessionStorage.setItem('userCoords', JSON.stringify({ lat, lng }))
}
function loadUserCoords() {
  const coordsJSON = sessionStorage.getItem('userCoords')
  return coordsJSON ? JSON.parse(coordsJSON) : null
}

const setUserCoords = ({ lat, lon }) => sessionStorage.setItem('userCoords', JSON.stringify({ lat, lon }))

async function getGeoLocationForLeaflet() {
  if (!process.client) return null
  const coords = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject))
  return { lat: coords.latitude, lng: coords.longitude }
}

const userLocation = getGeoLocation()
  .then(pos => {
    pos
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    //this.$router.push('/map')
  })

export default ({ app }, inject) => {
  inject('myInjectedFunction', userLocation)
}
