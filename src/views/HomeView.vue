<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../store/counter';

const useCounter = useCounterStore(); 
const {increment } = useCounter // destructuracion
const {double , count} = storeToRefs(useCounter) 
</script>

<template>
 <h1>Home Counter : {{ count }}</h1>
 <h2>Double : {{ double }}</h2>
 <button @click="increment">Incrementar</button>
</template>
