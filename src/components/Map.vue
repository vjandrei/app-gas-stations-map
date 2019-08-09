<template>
    <no-ssr>
        <mapbox
        @map-load="mapLoaded"
        access-token="pk.eyJ1IjoidmphbmRyZWkiLCJhIjoiY2p5bGJ4YTZnMDY5aTNjcnR3N2p4NGZmbCJ9.uxuxi-gzV2Nz47Scn-uhLw"
        :map-options="{
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
        }"
        ></mapbox>
    </no-ssr>
</template>

<script>
import Mapbox from "mapbox-gl-vue";
export default {
    head: {
        script: [
            { src: "https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.0/mapbox-gl.js" }
        ],
        link: [
            {
            rel: "stylesheet",
            href: "https://api.tiles.mapbox.com/mapbox-gl-js/v1.1.0/mapbox-gl.css"
            }
        ]
    },
    components: { Mapbox },
    data() {
        /* Data properties will go here */
        return {
            lat:'',
            lon:'',
            url: 'https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidmphbmRyZWkiLCJhIjoiY2p5bGJ4YTZnMDY5aTNjcnR3N2p4NGZmbCJ9.uxuxi-gzV2Nz47Scn-uhLw',
            zoom: 13,
            map: null,
            tileLayer: null,
            bounds: null,
            layers: [
                {
                    id: 0,
                    name: 'Bio gas',
                    active: false,
                    features: [],
                },
                {
                    id: 1,
                    name: 'Natural gas',
                    active: false,
                    features: [],
                }
            ],
            test: [
                {
                    type: "Feature",
                    geometry: {
                    type: "Point",
                    coordinates: [-77.03238901390978, 38.913188059745586]
                    },
                    properties: {
                    title: "Mapbox DC",
                    icon: "monument"
                    }
                },
                {
                    type: "Feature",
                    geometry: {
                    type: "Point",
                    coordinates: [-122.414, 37.776]
                    },
                    properties: {
                    title: "Mapbox SF",
                    icon: "harbor"
                    }
                }
            ]
        }
    },
    computed: {
        stations() {
            return this.$store.state.stations.all
        },
        userLocation(){
            return [this.lat, this.lon];
        }
    },
    mounted() { /* Code to run when app is mounted */ 
    },
    methods: { /* Any app-specific functions go here */ 
        mapLoaded(map) {
            map.addLayer({
                id: "points",
                type: "symbol",
                source: {
                type: "geojson",
                data: {
                    type: "FeatureCollection",
                    features: [
                        this.test
                    ]
                }
                },
                layout: {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
                }
            });
            }
    },
    beforeMount() {
    },
}
</script>

<style>
    #map {
        height: 30vh;
    }
</style>