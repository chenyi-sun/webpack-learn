<template>
    <div>
        <div class="name">
            {{name}}
            <div class="in">red</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            name: 'ssssnames'
        }
    }
};
</script>
<style lang="less" scoped>
    .name{
        font-size: 20px;
        color: white;
        .in{
            color: red;
        }
    }
</style>