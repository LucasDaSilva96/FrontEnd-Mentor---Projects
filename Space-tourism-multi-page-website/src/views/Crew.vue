<script setup lang="ts">
import CrewNav from '@/components/CrewNav.vue';
import data from "@/data/data.json"
import { useCrewNav } from '@/stores/crewNav';
import type { Crew } from '@/types/crew';
import { computed } from 'vue';
const crewData = data.crew as Crew[]
const crewStore = useCrewNav()
const currentData = computed(() => crewData[crewStore.crewIndex])
</script>


<template>
  <section class="bg-crewMobile sm:bg-crewTablet lg:bg-crewDesktop w-full h-full centerBg">
    <div class="wrapper container flex flex-col items-center justify-center h-full">

      <h2 class="flex items-center gap-300 text-preset8 md:self-start">
        <span class="text-white/50 font-bold">02</span>
        <span>MEET YOUR CREW</span>
      </h2>

      <CrewNav />
    </div>

  </section>
</template>
