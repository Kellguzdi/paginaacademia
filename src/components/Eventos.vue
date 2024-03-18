<template>
  <b-container-fluid>
    <section>
      <b-row>
        <b-col class="body">
          <b-col data-aos="zoom-in" data-aos-delay="500" class="text-center hero-content3  position-relative">
            <b-col class="son position-absolute">
              <b-col class="text-center servicios">
                <h1 class="lead1">Academia de Profesionales de la Salud México</h1>
                <p class="lead2">Eventos</p>
              </b-col>
            </b-col>
          </b-col>
        </b-col>
      </b-row>
    </section>
    <section class="section-services2">
      <b-row>
        <b-col class="mt-5 text-center">
          <h1 data-aos="fade-up" class="text-white">Participa en nuestros eventos</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="tbody text-center">
          <p data-aos="fade-up" class="text text-white">¡Únete a nosotros para participar en emocionantes eventos que promueven un estilo de vida activo y saludable!</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="tbody text-center">
          <p data-aos="fade-up" class="text text-white">¡No importa tu nivel de habilidad o condición física, hay un evento para ti! Únete a nosotros y sé parte de nuestra vibrante comunidad comprometida con la salud y el bienestar.</p>
        </b-col>
      </b-row>
      <div class="container-carousel">
        <b-carousel
            data-aos="fade-up"
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            fade
            background="#ababab"
            img-width="400"
            img-height="300"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >
          <!-- Slides with custom text -->
          <b-carousel-slide img-src="./../../public/evento2.jpg"></b-carousel-slide>

          <b-carousel-slide img-src="./../../public/evento3.jpg"></b-carousel-slide>

          <b-carousel-slide img-src="./../../public/evento4.jpg"></b-carousel-slide>
        </b-carousel>
      </div>


    </section>
    <Footer/>
  </b-container-fluid>
</template>
<style>
.container-carousel{
  max-height: 400px;
  max-width: 600px;
  margin: auto;
  border-radius: 10px;
  margin-top: 20px;
}
.text{
  font-size: 20px;
}
@media (max-width: 768px) {

  .text{
    font-size: 20px;
    width: 350px;
  }
}
.container-events{
  justify-content: space-between;
}
.img-container{
  height: 300px;
  width: auto;
}

.section-services2{
  background-color: #343A40;
}
.hero-content3 {
  background-image: url('./../../public/evento1.jpg');
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
<script setup>
import Footer from "@/components/Footer.vue";
</script>