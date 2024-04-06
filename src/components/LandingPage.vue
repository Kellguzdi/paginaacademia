<template>
  <b-container-fluid>
    <!-- Navbar Section -->
    <!-- Hero Image Section -->
    <b-row>
      <b-col class="body">
        <b-col data-aos="zoom-in" data-aos-delay="500" class="text-center hero-content">
          <b-col class="son position-absolute">
            <b-col class="text-center home">
              <h1>Academia de Profesionales de la Salud México</h1>
              <p class="lead">Dedicada a la capacitación para médicos en BLS/ACLS/PALS</p>
            </b-col>
          </b-col>
        </b-col>
      </b-col>
    </b-row>
    <div class="espacios">
    </div>
    <section class="body-section1">
      <b-row>
        <b-col md="12" sm="12" data-aos="fade-up" data-aos-duration="4000" data-aos-delay="50"
               class="presentacion text-center">
          <h1 class="title-who text-center">¿Quiénes somos?</h1>
          <p class="text">Somos una empresa dedicada a la capacitación médica, con el objetivo de brindar a los
            profesionales de la salud las herramientas necesarias para brindar una atención de calidad a sus pacientes.
            Nuestros cursos están diseñados para médicos, enfermeras, paramédicos y personal de emergencias, con el fin
            de que puedan adquirir los conocimientos y habilidades necesarias para brindar una atención de calidad en
            situaciones de emergencia.</p>
          <br/>
          <div>
            <img src="./../../public/img-1.jpg" width="350px" class="img-presentacion"/>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="body-section2">
      <b-row>
        <b-col sm="12" md="5" lg="6" data-aos="zoom-in" data-aos-delay="50" class="img-container">
          <img src="./../../public/img-4.jpg" class="img4"/>
        </b-col>
        <b-col sm="12" md="5" lg="6" data-aos="fade-up" data-aos-duration="4000" data-aos-delay="50" class="body-text">
          <h1 class="vision">Visión</h1>
          <p class="text-vision">La visión de la empresa consiste en consolidarse como referente destacado en la
            capacitación médica, ofreciendo cursos especializados como Soporte Vital Cardiovascular Avanzado, Soporte
            vital básico,Soporte vital avanzado pediátrico y de más en las áreas,</p>
          <br/>
          <br/>
          <h1 class="mision">Misión</h1>
          <p class="text-mision">Impulsar la calidad en la educación y eficacia en la atención médica, contribuyendo así
            en al bienestar de la persona y al avance de la calidad asistencial en el ámbito médico</p>
        </b-col>
      </b-row>
    </section>

    <div class="espacios3">
    </div>
    <section class="body-section3">
      <b-row>
        <b-col sm="12" md="5" data-aos="fade-up" data-aos-delay="50" class="text-valores">
          <h1 class="valores">Valores</h1>
          <br/>
          <h5>* Excelencia</h5>
          <p class="text-valores1">Compromiso con la calidad en la capacitación médica y la provición de equipos,
            buscando estándares de excelencia de cada servicio ofrecido</p>
          <br/>
          <h5>* Innovación</h5>
          <p class="text-valores1">Buscar constantemente nuevas y mejores formas de capacitar y proveer servicios
            médicos, adoptando tecnologías y prácticas de vanguardia.</p>
          <br/>
          <h5>* Compromiso</h5>
          <p class="text-valores1">Contribuir al bienestar de la comunidad proporcionando servicios médicos de calidad y
            participando en iniciativas sociales relacionadas con la salud</p>
          <br/>
          <h5>* Seguridad</h5>
          <p class="text-valores1">Priorizar la seguridad en la capacitación y en la prestación de servicios médicos,
            garantizando un entorno seguro para los pacientes y profesionales de la salud</p>
        </b-col>
        <b-col sm="12" md="5" data-aos="zoom-in" data-aos-delay="50">
          <img src="./../../public/img-5.jpg" class="img5"/>
        </b-col>
      </b-row>
    </section>
    <section class="footer-section">
      <b-row>
        <b-col class="footer-con">
          <Footer/>
        </b-col>
      </b-row>
    </section>


  </b-container-fluid>
</template>
<script>

import {defineComponent} from "vue";
import Footer from "@/components/Footer.vue";
import 'animate.css'
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: {Navbar, Footer},

})

</script>
<style lang="css">
.hero-content {
  background-image: url('/img-presentation.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: white;
  padding: 300px 0;
}

.son {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  top: 0;

}

.home {
  padding: 280px 0;

}

.img-presentacion {
  border-radius: 10px;
  object-fit: cover;

}

.presentacion {
  color: white;
}

@media (max-width: 767px) {
  .presentacion[data-aos] {
    animation: none !important;
  }

  .presentacion .title-who {
    font-size: 20px;
  }

  .presentacion .text {
    width: 365px;
    font-size: 15px;
    text-align: center;
  }

  .presentacion .img-presentacion {
    width: 300px;
    height: 100%;
  }
}

@media (max-width: 768px) {
  .hero-content {
    padding: 200px 0;
  }
}

.text {
  color: white;
  font-size: 20px;
  padding: 20px;
  width: 60%;
  margin: auto;
  text-align: center;
}


.body-section1 {
  background-color: #343A40;
  width: 100%;
  height: 100vh;
  border: none; /* Eliminar el borde */
  margin: 0;
  padding:0;
}
  @media (max-width: 767px) {
  .body-section1{
    height: 550px;
  }
}


  .text-valores {
    color: white;
    font-size: 20px;
    margin: auto;
    width: 80px;
    margin-left: 20px;
  }

  .espacios,.espacios3 {
    background-color: #343A40;
    height: 100px;
    border: none;
    margin: 0
  }
  @media (max-width: 767px) {
   .espacios3 {
      display:none;
    }
  }

  .footer-pag {
    background-color: #343A40;
    color: white;
    padding: 50px;
    text-align: center;
  }

  .img4,.img5 {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    border-radius: 10px;
  }


  .body-text {
    color: white;
    font-size: 20px;
    padding: 100px;
    width: 80px;
  }

  @media (max-width: 767px) {
    .body-text {
      padding: 50px;
      width: 350px !important;
      text-align: center;
      margin: auto;
    }

    .body-text .vision {
      font-size: 20px;
    }

    .body-text .text-vision {
      font-size: 13px;
      text-align:center;
    }

    .body-text .mision {
      font-size: 20px;
    }

    .body-text .text-mision {
      font-size: 14px;
      text-align: center;
    }

    .body-section2 br {
      display: none;
    }

    .img4 {
      width: 100px;
      height: 100px;
      display: block; /* Convertir la imagen en un bloque */
      margin-left: auto; /* Establecer el margen izquierdo a auto */
      margin-right: auto;
      width: 300px;
      height: 100%;
    }

    .img-container {
      order: 2;
    }

  }
  @media (max-width: 767px) {
    .text-valores {
      font-size: 14px;
      width: 350px !important;
      margin: auto;
      text-align: center;
    }

    .valores {
      font-size: 24px;
      margin-bottom: 30px;
    }

    .img5 {
      margin-top: 20px;
      width: 100px;
      height: 100px;
      display: block; /* Convertir la imagen en un bloque */
      margin-left: auto; /* Establecer el margen izquierdo a auto */
      margin-right: auto;
      width: 250px;
      height: 300px;
    }
  }

  .body {
    width: 100%;
    top: 0;
  }

  .body-section2, .body-section3 {
    background-color: #343A40;
    width: 100%;
    height: 100vh;
  }
  @media (max-width: 575px) {
    .body-section2 {
      height: 95%;
    }
    .body-section3{
      padding:50px
    }
    .footer-section{
      background-color: #343A40;
    }
    .footer-con{
      margin-top: 200px !important;
    }
  }


  html, body {
    overflow-x: hidden; /* Oculta la barra de desplazamiento horizontal */
    background-color: #343A40;
  }

</style>
