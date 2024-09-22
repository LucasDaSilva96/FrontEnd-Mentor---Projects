<script setup lang="ts">
import { useCrewNav } from '@/stores/crewNav';
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import data from "@/data/data.json"
import type { Crew } from '@/types/crew';
const crewData = data.crew as Crew[]
const crewStore = useCrewNav()

onMounted(() => {
  gsap.fromTo("#crewNav", { translateX: "-100%", opacity: 0 }, { translateX: 0, opacity: 1, duration: 1, ease: "power2.out", delay: .5 });
});

</script>

<template>
  <nav class="flex items-center gap-200 lg:gap-500" id="crewNav">
    <button v-for="(_crew, i) in crewData" @click="crewStore.setCrewIndex(i)" :key="i"
      class="w-200 h-200  bg-white/20 rounded-full transition-colors will-change-auto hover:bg-white/50"
      :class="{ activeCrew: i === crewStore.crewIndex }"></button>
  </nav>
</template>