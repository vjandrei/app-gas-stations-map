
<template>
    <div>
        <div class="container">
            {{station.name}}
            {{station.address}}
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{
            url_name: this.$route.params.id,
        }
    },
    computed: {
        station() {
            return this.$store.state.stations.all.find(station => station.url_name === this.url_name);
        },
        nearByStations() {
            return this.$store.state.stations.all.filter(stations => station.url_name !== this.url_name);
        }
    },
}
</script>

<style lang="sass">

</style>
