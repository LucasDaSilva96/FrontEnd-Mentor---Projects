<script setup lang="ts">
import Footer from './components/Footer.vue';
import HeaderDisplay from './components/HeaderDisplay.vue';
import SettingsModal from './components/SettingsModal.vue';
import Timer from './components/Timer.vue';
import { useFontStore } from './stores/fontStore';
import { useModelStore } from './stores/ModelStore';

const fontStore = useFontStore();

const modalStore = useModelStore();

</script>

<template>
  <main class="w-full p-4 flex flex-col items-center min-h-screen overflow-hidden justify-between"
    :class="{ '!font-kumbhSans': fontStore.font === 'Kumbh-Sans', '!font-robotoSlab': fontStore.font === 'Roboto-Slab', '!font-spaceMono': fontStore.font === 'Space-Mono' }">
    <header class="flex flex-col items-center gap-8">
      <h1 class="H2">pomodoro</h1>
      <HeaderDisplay />
    </header>
    <Timer />
    <Footer />
  </main>
  <SettingsModal v-if="modalStore.isOpen" />
</template>
