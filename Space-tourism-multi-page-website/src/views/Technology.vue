<script setup lang="ts">
import TechnologyNav from '@/components/TechnologyNav.vue';
import data from "@/data/data.json"
import { useTechnology } from '@/stores/technology';
import type { Technology } from '@/types/technology';
import { computed, onMounted, watch } from 'vue';
import { gsap } from 'gsap';

const technologyData = data.technology as Technology[]

const TechnologyStore = useTechnology()

const currentData = computed(() => technologyData[TechnologyStore.technologyIndex])

onMounted(() => {
  gsap.fromTo("#landscapeImage", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 })

  gsap.fromTo("#portraitImage", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 })

  gsap.fromTo("#techDescriptionBox", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.8 })
})

watch(() => TechnologyStore.technologyIndex, () => {
  gsap.to("#landscapeImage", { opacity: 0, x: -100, duration: 0.5 })
  gsap.to("#portraitImage", { opacity: 0, x: -100, duration: 0.5 })
  gsap.to("#techDescriptionBox", {
    opacity: 0, y: 100, duration: 0.5, onComplete: () => {
      gsap.fromTo("#landscapeImage", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
      gsap.fromTo("#portraitImage", { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
      gsap.fromTo("#techDescriptionBox", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, delay: 0.8 })
    }
  })
})

</script>

<template>
  <section
    class="bg-technologyMobile sm:bg-technologyTablet lg:bg-technologyDesktop w-full h-full centerBg pt-300 overflow-hidden">
    <div class="wrapper flex flex-col h-full w-full">
      <h2 class="flex items-center gap-300 text-preset8 self-center sm:self-start  sm:pl-500 pb-200">
        <span class="text-white/50 font-bold">03</span>
        <span>SPACE LAUNCH 101</span>

      </h2>
      <div class="flex flex-col justify-evenly items-center h-full lg:flex-row-reverse">

        <img class="block lg:hidden w-full max-h-[250px]" :src="currentData.images.landscape" id="landscapeImage" />
        <div id="portraitImage">
          <img class="hidden lg:block w-[608px]" :src="currentData.images.portrait" />
        </div>

        <div class="w-full flex items-center flex-col lg:flex-row justify-center gap-500 h-full px-200">
          <TechnologyNav :technologyData="technologyData" />

          <div class="text-center" id="techDescriptionBox">
            <h3 class="text-preset5 text-white/50">THE TERMINOLOGY…</h3>
            <p class="text-preset4">{{ currentData.name }}</p>

            <p class="max-w-[512px] lg:max-w-[350px] leading-[27px] text-lightBlue">{{ currentData.description }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
