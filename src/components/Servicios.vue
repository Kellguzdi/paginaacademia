<template>
<b-container-fuild>
<section>
    <b-row>
      <b-col class="body">
        <b-col data-aos="zoom-in" data-aos-delay="500" class="text-center hero-content2  position-relative">
          <b-col class="son position-absolute">
            <b-col class="text-center servicios">
              <h1 class="lead1">Academia de Profesionales de la Salud México</h1>
              <p class="lead2">Servicios</p>
            </b-col>
          </b-col>
        </b-col>

      </b-col>
    </b-row>
</section>
  <div class="espacios">
  </div>
  <div class="section-services1">
    <b-row data-aos="fade-up">
      <b-col class="text-center">
        <h1 class="certificaciones">Certificaciones</h1>
      </b-col>
    </b-row>

    <b-row data-aos="fade-up">
      <b-col sm="12" md="6" lg="4" class="cards-body">
        <b-card class="card text-white" title="BLS (Basic Life Support)">
        </b-card>
      </b-col>
      <b-col sm="12" class="cards-body">
        <b-card class="card text-white" title="ACLS (Advanced Cardiovascular Life Support)">
        </b-card>
      </b-col>
      <b-col sm="12" class="cards-body">
        <b-card class="card text-white"  title="PALS (Pediatric Advanced Life Support">
        </b-card>
      </b-col>
    </b-row>
    <div class="mt-5">
      <b-row data-aos="fade-up">
        <b-col  class="text-center">
          <h1 class="diplomados">Diplomados</h1>
        </b-col>
      </b-row>
      <b-row data-aos="fade-up">
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white" title="Diplomado en Urgencias Médicas Básico">
          </b-card>
        </b-col>
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white" title="Diplomado en Urgencias Médicas Intermedias">
          </b-card>
        </b-col>
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white"  title="Diplomado en Urgencias Médicas Avanzadas">
          </b-card>
        </b-col>
      </b-row>

      <b-row data-aos="fade-up">
        <b-col class="text-center mt-4">
          <h1 class="servicios2">Servicios</h1>
        </b-col>
      </b-row>
      <b-row data-aos="fade-up">
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white" title="Soporte Vital Básico">
          </b-card>
        </b-col>
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white" title="Soporte Vital Cardiovascular">
          </b-card>
        </b-col>
        <b-col sm="12" class="cards-body">
          <b-card class="card text-white"  title="Soporte Vital Avanzado Pediátrico">
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
<Footer/>
</b-container-fuild>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>

<style>
.certificaciones,.diplomados,.servicios2{
  color: white;
}
.cards-body .card:hover{
  box-shadow: 0px 0px 20px 1px #ffbb763f;
  border: 1px solid rgba(255, 255, 255, 0.454);
}
.cards-body .card{
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.074);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: 0.7rem;
  transition: all ease 0.3s;
}
.cards-body{
  margin-top:50px !important;
  margin:auto;
  text-align: center;
  max-width: 350px !important;
}
.section-services1{
  background-color: #343A40;
}
.hero-content2 {
  background-image: url('./../../public/img-3.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  padding: 300px 0;
}
.body{
  width: 100%;
  top: 0;
}
.son{
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height:100vh;
  top: 0;
}
.servicios{
  padding: 280px 0;

}
</style>