<template>

  <PublicLayout>

    <section class="hero">
      <h1>BlogSimple</h1>
      <p>Plataforma de gestión de contenido</p>
    </section>

    <section id="vue2" class="section">
      <h2>Vue 2</h2>
      <p>
        Información sobre Vue 2...
      </p>
    </section>

    <section id="vue3" class="section">
      <h2>Vue 3</h2>
      <p>
        Información sobre Vue 3...
      </p>
    </section>

    <section id="comparacion" class="section">
      <h2>Vue 2 vs Vue 3</h2>
      <p>
        Comparación entre ambas versiones...
      </p>
    </section>

    <section id="posts" class="section">

      <h2>Artículos</h2>

      <div
        v-for="post in posts"
        :key="post.id"
        class="card mb-3"
      >
        <div class="card-body">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </div>
      </div>

    </section>

  </PublicLayout>

</template>

<script setup lang="ts">

import { ref,onMounted } from 'vue'

import PublicLayout from '../layouts/PublicLayout.vue';

import PostController from '../controllers/PostController';
const posts = ref([])

onMounted(async()=>{

  posts.value = await PostController.getPosts()

})

</script>