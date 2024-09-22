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
  <section class="bg-crewMobile sm:bg-crewTablet lg:bg-crewDesktop w-full h-full centerBg p-300 overflow-hidden">
    <div class="wrapper container flex flex-col lg:flex-row items-center justify-center lg:justify-around h-full ">

      <h2 class="flex items-center gap-300 text-preset8 self-center md:self-start min-w-[250px] pt-300">
        <span class="text-white/50 font-bold">02</span>
        <span>MEET YOUR CREW</span>
      </h2>

      <div
        class="flex flex-col items-center lg:items-start lg:gap-300 justify-around h-full text-center lg:text-start lg:pt-200 w-full">


        <div class="flex flex-col items-center lg:items-start gap-100">
          <p class="text-preset5 text-white/50 uppercase">{{ currentData.role }}</p>
          <p class="text-preset4 uppercase">{{ currentData.name }}</p>
          <p class="mt-200 max-w-[512px] text-lightBlue leading-[27px]">{{ currentData.bio }}</p>
        </div>

        <CrewNav />

      </div>

      <div class="relative lg:ml-400" id="crew_img_container">
        <img :src="currentData.images.webp" alt="crew member" class="max-h-[250px] lg:max-h-[570px]" />
        <div id="gradient"></div>
      </div>
    </div>

  </section>
</template>
