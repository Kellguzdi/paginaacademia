<template>
  <b-navbar toggleable="lg" variant="dark" type="dark" class="navbar text-center" fixed="top">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse"  is-nav>
      <b-navbar-nav class="nav ml-auto justify-content-center">
        <b-nav-item href="inicio" class="nav-link">Inicio</b-nav-item>
        <b-nav-item href="servicios" class="nav-link">Servicios</b-nav-item>
        <b-navbar-brand href="inicio"><img src="./../../public/sinfondo.png" width="120"/></b-navbar-brand>
        <b-nav-item href="eventos" class="nav-link">Eventos</b-nav-item>
        <b-nav-item href="contactos" class="nav-link">Contactos</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<style>
.navbar{
  width: 100%;
  justify-content: center;
  text-align: center;
  opacity: 0.97;
}
.nav{
  text-align: center;
  flex: 1; /* Permite que los elementos se expandan para llenar el espacio disponible */
  justify-content: space-around;
}
.nav-link{
  color: white;
  font-size: 20px;
  margin: 0 35px;
  margin-top: 10px;
}
.navbar-nav {

}
</style>
