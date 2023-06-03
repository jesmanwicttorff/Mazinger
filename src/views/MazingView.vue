<script setup>
import {usegetData } from '../composables/getData'
import { useRoute , useRouter} from 'vue-router'; // Obtenemos los parametros de ruta
import {usefavoritoStrore} from '../store/favoritos'

const usaFavorito = usefavoritoStrore()
const {add, buscar} = usaFavorito // destructuracion
const ruta = useRoute()
const ruta2 = useRouter()

const {loading , dato , getData , error} = usegetData();
const back = () =>{
    ruta2.push('/mazinger')
};
 getData(`https://pokeapi.co/api/v2/pokemon/${ruta.params.name}`)
</script>

<template>
    <div class="container">
        <p v-if="loading"> Cargando la informacion ...</p>
        <div class="alert alert-danger mt-2 " v-if="error">{{ error }}</div>
    <div v-if="dato">
        <img :src="dato.sprites?.front_default" alt=""/>
        <h1>Mazinger el Robot Gladiador {{ $route.params.name }}</h1>
        <button :disabled="buscar(dato.name)" class="btn btn-primary mb-2" @click="add(dato)">Agregar Favorito</button>
    </div>
    <div>
        <button @click="back" class="btn btn-outline-primary mb-2">Volver</button>
    </div>
</div>
    
    
</template>