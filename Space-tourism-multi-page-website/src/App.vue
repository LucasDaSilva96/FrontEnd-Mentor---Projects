<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
</script>

<template>
  <main class="bg-darkBlue w-full h-screen text-white relative font-Bellefair">
    <HeaderNav />
    <RouterView />
  </main>
</template>
