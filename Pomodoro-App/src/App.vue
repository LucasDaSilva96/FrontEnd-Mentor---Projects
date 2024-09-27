<script setup lang="ts">
import Footer from './components/Footer.vue';
import HeaderDisplay from './components/HeaderDisplay.vue';
import Timer from './components/Timer.vue';
</script>

<template>
  <main class="w-full p-4 flex flex-col items-center min-h-screen overflow-hidden justify-between">
    <header class="flex flex-col items-center gap-8">
      <h1 class="H2">pomodoro</h1>
      <HeaderDisplay />
    </header>
    <Timer />
    <Footer />
  </main>

</template>
