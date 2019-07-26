
<template>
    <div>
        {{station.name}}
        {{station.address}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            url_name: this.$route.params.id,
            stations:[
                {
                    id: '01',
                    url_name: 'muijala', 
                    name: 'Gasum Lohja Muijala',
                    address: 'Mineraalintie 1'
                },
                {
                    id: '02',
                    url_name: 'tytyri',
                    name: 'Gasum Lohja Tytyri',
                    address: 'Tytyrinkatu 4'
                }
            ]
        }
    },
    computed: {
        station() {
            return this.stations.find(station => station.url_name === this.url_name);
        }
    },
}
</script>

<style lang="sass">

</style>
