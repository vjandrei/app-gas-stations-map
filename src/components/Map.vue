<template>
    <div>
        <div id="map">
            <no-ssr>
                <l-map :zoom="zoom" :center="center" ref="myMap" @update:bounds="boundsUpdated" @update:center="centerUpdated" @ready="markers">
                    <l-tile-layer :url="url"></l-tile-layer>
                    <l-marker v-for="station in stations" :key="station.id" :lat-lng="station.coords"></l-marker>
                    <v-locatecontrol/>
                </l-map>
            </no-ssr>
        </div>
        <div id="sidebar"></div>
    </div>
</template>

<script>

export default {
    data() {
        /* Data properties will go here */
        return {
            url: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmphbmRyZWkiLCJhIjoiY2p6NGh4bWVpMGRjdDNjcXQyMTVqMGJ5ZiJ9.isbVgawMYpeqYeCRh3Zi5g',
            zoom: 10,
            center: [60.300040, 24.214420],
        }
    },
  
    computed: {
        stations() {
            return this.$store.state.stations.all
        }
    },
    mounted () {
        
    },
    events:{

    },
    methods: { /* Any app-specific functions go here */
        markers(){
        },
        centerUpdated (center) {
            this.center = center;
        },
        boundsUpdated (bounds) {
            var inBounds = []
            this.bounds = bounds;
            console.log(this.bounds)
            const markers = this.$store.state.stations.all

            for (var i = 0, len = markers.length; i < len; i++) {
                var marker = markers[i];
                if (bounds.contains(marker.coords)) {
                    inBounds.push(marker.name);
                    console.log(marker.name);
                }
            }
        }
    }
}

</script>

<style>
    #map{
      height: 50vh; 
      width: 100%;
    }
    #sidebar {
            padding: 24px;
            font-family: monospace;
        }
</style>