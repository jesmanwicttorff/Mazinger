import {ref} from 'vue'
import axios from 'axios'


export const usegetData =() =>{
    const error = ref(null)
    const loading = ref(true)
    const dato = ref(null) // Dato puede recibir un string, un array etc
    const getData = async(url) =>{
        loading.value = true
        try { 
            const res = await axios.get(url)
            dato.value = res.data
        } catch(e){
            console.log(e)
            error.value = "No existe Mazinger Z"
        } finally{
            loading.value = false
        }
         
        };
        return {
            getData,
            dato, 
            loading,
            error
        }

}