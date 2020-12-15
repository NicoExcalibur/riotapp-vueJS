<template>

    <div class="container">

        <h1>Bienvenue sur la page des Champions</h1>


        <ul>
            <li v-bind:key="index" v-for="(champion, index) in allChamps">
                <router-link :to="`/champions/${index}`">
                    <div class="card m-2">
                        <h3>{{champion.id}}</h3>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>


</template>

<script>

import axios from 'axios'

export default {
    name: 'Champions',
    data() {
        return {
            allChamps: []
        }
    },
    methods: {

    },
    created(){
        
        axios
        .get('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/fr_FR/champion.json')
        .then(reponse => {
            console.log(reponse.data.data);
            for(const item of reponse.data.data){
                this.allChamps.push(item)
            }
            

        })
    }
}
</script>

<style>

</style>