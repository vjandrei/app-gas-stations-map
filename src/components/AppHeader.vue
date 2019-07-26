<template>
    <div>
        <nav>
            <div class="cta-item"></div>
            <div id="appTitle">
                <h3>Kaasuasemat</h3>
            </div>
            <div class="cta-item"></div>
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
        padding-top: power(8,1,1);
        padding-bottom: power(8,1,1);
    }
    #appTitle{
        flex:1;
    }
    .cta-item{
        flex: 1;

    }
</style>