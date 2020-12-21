<template>

    <div class="container">

        <h1>Bienvenue sur la page des Champions</h1>


        <ul>
            <li v-bind:key="index" v-for="(champion, index) in allChamps">
                <router-link :to="`/champions/${index}`">
                    <div class="card m-2">
                        <h3>{{champion.name}}</h3>
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
            allChamps: [],
        }
    },
    methods: {

    },
    created(){
        
        axios
        .get('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/fr_FR/champion.json')
        .then(reponse => {
            // console.log(reponse.data);
            let listOfChamps = Object.keys(reponse.data.data).map((key) => {
                return reponse.data.data[key]
            })
            for(const item of listOfChamps){
                this.allChamps.push(item)
            }
            console.log(listOfChamps)
            

        })
        .catch(error => console.log(error))
        // fetch('http://ddragon.leagueoflegends.com/cdn/10.25.1/data/fr_FR/champion.json')
        // .then(
        //     function(response) {
        //     if (response.status !== 200) {
        //         console.log('Looks like there was a problem. Status Code: ' +
        //         response.status);
        //         return;
        //     }

        //     // Examine the text in the response
        //     response.json().then(function(data) {
        //         console.log(data.data);
        //     });
        //     }
        // )
        // .catch(function(err) {
        //     console.log('Fetch Error :-S', err);
        // });
    }
}
</script>

<style>

</style>