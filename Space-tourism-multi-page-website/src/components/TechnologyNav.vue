<script setup lang="ts">
import { useTechnology } from '@/stores/technology';
import type { Technology } from '@/types/technology';

const props = defineProps<{
  technologyData: Technology[]
}>()

const TechnologyStore = useTechnology()
</script>

<template>
  <nav class="flex items-center gap-200 md:flex-col">
    <button v-for="(_data, i) in technologyData"
      class="w-500 h-500 border border-white/30 rounded-full p-100 transition-all will-change-auto font-bold hover:border-white"
      :key="i" @click="TechnologyStore.setTechnologyIndex(i)"
      :class="{ activeTech: TechnologyStore.technologyIndex === i }">{{ i
        + 1
      }}</button>
  </nav>
</template>