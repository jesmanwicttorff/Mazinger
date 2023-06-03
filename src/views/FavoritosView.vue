<script setup>
import { storeToRefs } from 'pinia';
import {usefavoritoStrore} from '../store/favoritos'
import {RouterLink} from 'vue-router'

const usaFavorito = usefavoritoStrore();
const {remove} = usaFavorito // destructuracion
// el storeTorefs nos permite hacer la destructutracion del archivo store de una variable reactivo
const {favorit} = storeToRefs(usaFavorito) 
</script>
<template>
    <h1>Favoritos</h1>
    <h1 v-if="favorit.length===0">No hay Favorito</h1>
    <ul v-else class="listgroup">
        <li class="list-group-item" v-for="mazi in favorit" :key="mazi.id">
        <div>
            {{ mazi.name }}
        </div>
        <div>
            <router-link class="btn btn-sm btn-success me-2 mb-2" :to="`/mazinger/${mazi.name}`" >Más Información</router-link>  
            <button class="btn btn-sm btn-danger me-2 mb-2" @click="remove(mazi.id)">Eliminar</button>
        </div>
        </li>
    </ul>
</template>