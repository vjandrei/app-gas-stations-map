<template>
  <div>
    <div class="container">
        <StationMap/>
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
