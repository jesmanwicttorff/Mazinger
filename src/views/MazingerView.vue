<script setup>
import {RouterLink} from 'vue-router'
import {usegetData} from '../composables/getData'
import { useCounterStore } from '../store/counter';

//const useCounter = useCounterStore();

const {getData , dato , loading , error} = usegetData() // hacemos destructuracion de useGetdata
getData('https://pokeapi.co/api/v2/pokemon/');
   
</script>
<template>
    <div class="container">
    <h1>Mazinger</h1>
  <!---- <h1>Home Counter : {{ useCounter.count }}</h1>
    <h2>Double : {{ useCounter.double }}</h2>
    <button @click="useCounter.increment">Incrementar</button>
  -->
    <p v-if="loading"> Cargando la informacion ...</p>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="dato">
        <ul class="list-group">
            <li class="list-group-item" v-for="(Maz,key) in dato.results" :key="key">

                <router-link :to="`/mazinger/${Maz.name}`">{{ Maz.name }}</router-link>
            </li>
        </ul>
    </div>
    <div mt-2>
        <button 
            :disabled="!dato?.previous" 
            class="btn btn-success me-2" 
            @click="getData(dato.previous)">Previous
        </button>
        <button 
            :disabled="!dato?.next" 
            class="btn btn-primary me-2" 
            @click="getData(dato.next)">Next
        </button> 

    </div> 
     
    </div>
</template>