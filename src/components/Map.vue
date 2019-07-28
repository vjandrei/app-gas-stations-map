<template>
    <div>
        <div id="map" style="height: 50vh; width: 100%;">
            <no-ssr>
                <l-map :zoom="zoom" :center="userLocation">
                <l-tile-layer :url="url"></l-tile-layer>
                <l-marker :lat-lng="userLocation" ></l-marker>
                <l-marker v-for="station in stations" :key="station.id" :lat-lng="station.coords"></l-marker>
                <v-locatecontrol/>
                </l-map>
            </no-ssr>
        </div>

        <div id="sidebar"></div>

        <div class="form-check" v-for="layer in layers" :key="layer.id">
            <label class="form-check-label">
                <input class="form-check-input" type="checkbox" v-model="layer.active" @change="layerChanged(layer.id, layer.active)"/>
                {{ layer.name }}
            </label>
        </div>
    </div>
</template>

<script>

export default {
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
                    features: [
                    ],
                },
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
        this.initLayers();
        this.currentLocation();
    },
    methods: { /* Any app-specific functions go here */ 

        layerChanged(layerId, active) {
            const layer = this.layers.find(layer => layer.id === layerId);
            
            layer.features.forEach((feature) => {
            if (active) {
                feature.leafletObject.addTo(this.map);
            } else {
                feature.leafletObject.removeFrom(this.map);
            }
            });
        },

        initLayers() {
            this.layers.forEach((layer) => {
            const markerFeatures = layer.features.filter(feature => feature.type === 'marker');
            const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');
            
            markerFeatures.forEach((feature) => {
                feature.leafletObject = L.marker(feature.coords)
                .bindPopup(feature.name);
            });
            
            polygonFeatures.forEach((feature) => {
                feature.leafletObject = L.polygon(feature.coords)
                .bindPopup(feature.name);
            });
            });
        },
        
        layerChanged(layerId, active) {},

        geolocation() {
            navigator.geolocation.getCurrentPosition(this.buildUrl);
        },

         currentLocation() {		
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }
            else{
                this.error = "Geolocation is not supported.";   
            }
        },

        buildUrl(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
        },

        showPosition(position) {	
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
        },
    },
    beforeMount() {
        this.geolocation();
    },
}

</script>

<style>
    
</style>