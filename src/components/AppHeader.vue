<template>
    <div>
        <nav>
            <div class="cta-item">1</div>
            <div id="appTitle">
                <h3>Kaasuasemat</h3>
            </div>
            <div class="cta-item">2</div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    nav{
        display: flex;
        height: 40px;
        width: 100%;
        justify-content: center;
        align-content: space-around;
        align-items: center;
        text-align: center;
    }
    #appTitle{
        flex:1;
        @extend .m-t-8;
    }
    .cta-item{
        flex: 1;
    }
</style>