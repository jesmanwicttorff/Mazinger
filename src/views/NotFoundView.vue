<script setup>
import { useRouter } from 'vue-router'
const ruta2 = useRouter()
const back = () =>{
ruta2.push('/mazinger')
}
</script>
<template>
    <div class="container">
    <h1>404</h1>
        <button @click="back" class="btn btn-primary">Volver</button>
    </div>
</template>