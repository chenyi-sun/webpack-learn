<template>
    <div id="example">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: 'Hello World!'
        }
    }
}
</script>

<style scoped>
#example {
    background: blue;
    height: 100vh;
}
</style>