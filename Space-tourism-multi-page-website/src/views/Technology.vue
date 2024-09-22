<script setup lang="ts">
import TechnologyNav from '@/components/TechnologyNav.vue';
import data from "@/data/data.json"
import { useTechnology } from '@/stores/technology';
import type { Technology } from '@/types/technology';
import { computed } from 'vue';

const technologyData = data.technology as Technology[]

const TechnologyStore = useTechnology()

const currentData = computed(() => technologyData[TechnologyStore.technologyIndex])
</script>

<template>
  <section
    class="bg-technologyMobile sm:bg-technologyTablet lg:bg-technologyDesktop w-full h-full centerBg pt-300  overflow-hidden">
    <div class="wrapper flex flex-col h-full w-full">
      <h2 class="flex items-center gap-300 text-preset8 self-center sm:self-start  sm:pl-500 pb-200">
        <span class="text-white/50 font-bold">03</span>
        <span>SPACE LAUNCH 101</span>

      </h2>
      <div class="flex flex-col justify-evenly h-full md:flex-row-reverse">

        <img class="block md:hidden w-full" :src="currentData.images.landscape" />
        <img class="hidden md:block w-full max-h-[608px]" :src="currentData.images.portrait" />

        <div class="w-full flex items-center flex-col justify-evenly h-full px-200">
          <TechnologyNav :technologyData="technologyData" />

          <div class="text-center">
            <h3 class="text-preset5 text-white/50">THE TERMINOLOGY…</h3>
            <p class="text-preset4">{{ currentData.name }}</p>

            <p class="max-w-[512px] leading-[27px] text-lightBlue">{{ currentData.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
