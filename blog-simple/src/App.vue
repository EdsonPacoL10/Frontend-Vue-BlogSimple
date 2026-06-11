<template>
    <Navbar />
    <main class="container mt-4">
        <router-view />
    </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'

const goToSection = (id: string): void => {

  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

}
</script>