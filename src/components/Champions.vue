<template>

    <div class="container">

        <h1>Bienvenue sur la page des Champions</h1>


        <ul class="list-inline list-unstyled">
            <li v-bind:key="index" v-for="(champion, index) in allChamps"  class="list-inline-item">
                <!-- <router-link :to="`/champions/${index}`">
                    <div class="card m-2">
                        <h3>{{champion.id}}</h3>
                        <img :src="url_image +  champion.id + format_img">
                    </div>
                </router-link> -->
                    <div class="card" style="width: 16rem;">
                        <img :src="url_image + champion.id + format_img" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{champion.id}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{{champion.title}}</h6>
                            <p class="card-text">{{ splitString(champion.blurb, txt_limit)}}</p>
                            <router-link :to="`/champions/${champion.name}`" class="btn btn-primary">
                                Fiche détaillée
                            </router-link>
                        </div>
                    </div>
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
            url_image: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/',
            format_img: '_0.jpg',
            txt_limit: '.'
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