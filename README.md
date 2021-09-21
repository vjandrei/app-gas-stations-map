# NuxtTailwindPostcss

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Map how this works

1. 

## 

/*
    this.$nuxt.$on('show-marker', (station) => {
      this.$nextTick(() => {
        this.$refs.map.mapObject.setView(
          L.latLng(station.coords.lat, station.coords.lng),
          14
        )
        console.log(L.marker(L.latLng(station.coords.lat, station.coords.lng)))
        L.marker(L.latLng(station.coords.lat, station.coords.lng), {
          title: 'hello!',
        }).addTo(this.$refs.map.mapObject)
      })
    })

    this.$nuxt.$on('remove-marker', (station) => {
      this.$nextTick(() => {
        this.$refs.map.mapObject.removeLayer(
          L.marker(L.latLng(station.coords.lat, station.coords.lng))
        )
      })
    })
    */