<script setup lang="ts">
import { useTechnology } from '@/stores/technology';
import type { Technology } from '@/types/technology';
import { gsap } from 'gsap';
import { onMounted } from 'vue';

const props = defineProps<{
  technologyData: Technology[]
}>()

const TechnologyStore = useTechnology()

onMounted(() => gsap.fromTo('#techNav', { translateX: "-100%", opacity: 0 }, { translateX: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }))

</script>

<template>
  <nav class="flex items-center gap-200 lg:gap-400 lg:flex-col" id="techNav">
    <button v-for="(_data, i) in technologyData"
      class="w-500 h-500 lg:w-1000 lg:h-1000 border border-white/30 rounded-full p-100 transition-all will-change-auto font-bold hover:border-white"
      :key="i" @click="TechnologyStore.setTechnologyIndex(i)"
      :class="{ activeTech: TechnologyStore.technologyIndex === i }">{{ i
        + 1
      }}</button>
  </nav>
</template>