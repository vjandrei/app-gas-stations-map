<template>
  <div>
    <div class="container">
         <div id="map-wrap" style="height: 50vh; width: 100%;">
        <no-ssr>
            <l-map :zoom="13" :center="[47.413220, -1.219482]">
            <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :lat-lng="[47.413220, -1.219482]"></l-marker>
            </l-map>
        </no-ssr>
        </div>
        <StationList/>
    </div>
  </div>
</template>

<script>
import StationMap from '@/components/Map';
import StationList from '@/components/StationList';

export default {
  components: {
    StationList,
    StationMap,
  }, 
}
</script>

<style>

</style>
