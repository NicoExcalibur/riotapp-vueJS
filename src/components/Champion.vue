<template>
    <div>
        <h1> Page de {{ $route.params.id }}</h1>
        <img :src="url_image + $route.params.id + format_img" alt="">
    </div>
</template>

<script>
export default {
    name: 'Champion',
    data() {
        return {
            url_image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
            format_img: '_0.jpg'
        }
    },
}
</script>

<style>

</style>