<script setup>
import LandingPage from './components/LandingPage.vue';
import Servicios from './components/Servicios.vue';
import Navbar from "@/components/Navbar.vue";
import Eventos from "@/components/Eventos.vue";
</script>

<template>
  <div id="app" container-fluid>
    <b-col>
      <Navbar/>
    </b-col>
    <b-col>
      <router-view></router-view>
    </b-col>

  </div>
</template>

<style scoped>

</style>
