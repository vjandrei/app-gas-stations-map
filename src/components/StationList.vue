<template>
    <div>
        List of Stations
        <ul>
            <li v-for="station in stations" :key="station.id">
                <nuxt-link :to="{name: 'stations-id', params: {id: station.url_name}}" >
                    {{station.url_name}}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        stations(){
            return this.$store.state.stations.all
        }
    },
}
</script>

<style lang="scss">
    
</style>