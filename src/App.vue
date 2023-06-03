<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <nav class="navbar navbar-light bg-light bg-dark navbar-dark">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
      Mazinger
    </router-link>
  </div>
  <!--  active-class="active" Esto lo puedes usar en la clase
   de router-link para activa botones-->
  <router-link  active-class="active" class="btn btn-outline-success  me-2" to="/">Home</router-link>
  <router-link active-class="active" class="btn btn-outline-primary me-2" to="/mazinger">Mazinger</router-link> 
  <router-link active-class="active" class="btn btn-outline-warning me-2" to="/favoritos">Favorito</router-link> 
</nav>
<div class="container text-center">
  <router-view/>
  <footer>Jesman</footer>
</div>
 
</template>

