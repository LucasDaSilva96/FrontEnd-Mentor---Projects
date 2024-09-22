<script setup lang="ts">
import { useCrewNav } from '@/stores/crewNav';
import data from "@/data/data.json"
import type { Crew } from '@/types/crew';
const crewData = data.crew as Crew[]
const crewStore = useCrewNav()

</script>

<template>
  <nav class="flex items-center gap-200 lg:gap-500">
    <button v-for="(_crew, i) in crewData" @click="crewStore.setCrewIndex(i)" :key="i"
      class="w-150 h-150  bg-white/20 rounded-full transition-colors will-change-auto hover:bg-white/50"
      :class="{ activeCrew: i === crewStore.crewIndex }"></button>
  </nav>
</template>