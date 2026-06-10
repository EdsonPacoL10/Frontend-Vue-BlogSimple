<template>

  <PublicLayout>

    <section>

      <h1>BlogSimple</h1>

      <p>
        Plataforma de gestión de contenido
      </p>

      <div
        v-for="post in posts"
        :key="post.id"
      >
        <h3>
          {{ post.title }}
        </h3>

        <p>
          {{ post.body }}
        </p>
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