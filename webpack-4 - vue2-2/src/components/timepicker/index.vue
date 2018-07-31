<template>
    <div>
        <div class="timepick-box" :style="'bottom:'+bottom+'px;'">
            <div class="in-line"></div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            bottom: -0
        }
    },
    methods: {
        _setYear(){

        },

    }
}
</script>
<style lang="less" scoped>
.timepick-box{
    width: 100%;
    position: fixed;
    height: 300px;
    background: white;
    bottom: -300px;
    left: 0px;
    // display: none;
}
.timepick-box .in-line{
    width: 20%;
    height: 100px;
    position: absolute;
    left: 0px;
    background: blue;
}
</style>