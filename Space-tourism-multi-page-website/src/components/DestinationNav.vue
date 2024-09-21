<script setup lang="ts">
const props = defineProps<{
  index: number;
}>();
import data from "@/data/data.json"
import { useDestinationNav } from '@/stores/destinationNav';

const destinationStore = useDestinationNav()

const titles = data.destinations.map(destination => destination.name)

</script>

<template>
  <nav class="flex items-center gap-400">
    <button
      class="text-lightBlue text-preset8 pb-100 border-b-2 border-transparent uppercase hover:border-lightBlue hover:text-lightBlue focus:outline-none transition-colors duration-300 ease-in-out"
      :class="{ activeDestination: index === i }" @click="destinationStore.setDestinationIndex(i)"
      v-for="(title, i) in titles" :key="i">{{ title
      }}</button>
  </nav>
</template>