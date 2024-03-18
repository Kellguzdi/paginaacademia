<template>
  <b-container-fluid>
    <b-row>
      <b-col class="text ">
        <div class="padding"></div>
        <h3 data-aos="fade-up" class="text-white">¡Conéctate con nosotros en las redes sociales!</h3>
        <p data-aos="fade-up" class="text-white">Descubre más sobre lo que hacemos y mantente al día con las últimas
          noticias y actualizaciones siguiéndonos en nuestras redes sociales. Desde contenido exclusivo hasta consejos
          útiles, nuestros perfiles sociales son el lugar perfecto para sumergirte en nuestro mundo.</p>
        <Footer/>
      </b-col>

    </b-row>
  </b-container-fluid>

</template>
<script setup>
import Footer from "@/components/Footer.vue";
</script>
<style>
.padding {
  padding: 80px;
}

.text {
  background-color: #343A40;
}

@media (max-width: 767px) {
  .padding {
    display: none;
  }

  .text {
    margin-top: 100px;
    height: 150vh;

  }
}

html, body {
  overflow-y: hidden; /* Oculta la barra de desplazamiento horizontal */
  background-color: #343A40;
}
</style>
