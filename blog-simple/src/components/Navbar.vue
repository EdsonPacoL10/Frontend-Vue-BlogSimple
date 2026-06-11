<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">

    <div class="container">

      <a class="navbar-brand fw-bold" href="#">
        BlogVue
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarMain">

        <ul class="navbar-nav me-auto">

          <li class="nav-item">
            <a class="nav-link" href="#">
              Inicio
            </a>
          </li>

          <!-- Dropdown Vue -->

          <li class="dropdown">

            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Vue
            </a>

            <ul class="dropdown-menu">

              <li>
                <a href="#" class="dropdown-item" @click.prevent="goToSection('vue2')">
                  Vue 2
                </a>
              </li>

              <li>
                <a href="#" class="dropdown-item" @click.prevent="goToSection('vue3')">
                  Vue 3
                </a>
              </li>

              <li>
                <a href="#" class="dropdown-item" @click.prevent="goToSection('comparacion')">
                  Vue 2 vs Vue 3
                </a>
              </li>

            </ul>

          </li>

          <li class="nav-item">
            <a class="nav-link" href="#posts">
              Artículos
            </a>
          </li>

        </ul>

        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Buscar...">

          <button class="btn btn-success" type="submit">
            Buscar
          </button>
        </form>

      </div>

    </div>

  </nav>

</template>
<script setup lang="ts">



</script>