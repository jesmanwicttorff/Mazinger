import { defineStore } from "pinia";
import {ref} from 'vue'

export const usefavoritoStrore = defineStore('favoritos',()=>{
    const favorit = ref([]);
    
    if(localStorage.getItem('MazingerFavorito', )){
       favorit.value=  JSON.parse(localStorage.getItem('MazingerFavorito'))
    }

    const add = (mazinger) =>{
         favorit.value.push(mazinger)
        localStorage.setItem('MazingerFavorito',JSON.stringify(favorit.value))
    }
    // Remove me va dvolver en el fitor todos excepto el id que estoy filtrando
    const remove = (id) =>{
        favorit.value = favorit.value.filter((item)=>item.id != id)
        localStorage.setItem('MazingerFavorito',JSON.stringify(favorit.value))
    }
    const buscar = nombre => favorit.value.find((item) => item.name == nombre)
    return {
        favorit,
        add,
        remove,
        buscar
    }
})