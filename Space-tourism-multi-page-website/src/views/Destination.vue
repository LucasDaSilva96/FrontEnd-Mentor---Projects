<script setup lang="ts">
import DestinationHeader from '@/components/DestinationHeader.vue';
import DestinationNav from '@/components/DestinationNav.vue';
import data from "@/data/data.json"
import { useDestinationNav } from '@/stores/destinationNav';
import type { Destination } from '@/types/destination';
import { computed } from 'vue';

const destination = data.destinations as Destination[]
const destinationStore = useDestinationNav()

const image = computed(() => destination[destinationStore.destinationIndex].images.webp)

</script>

<template>
  <section class="bg-destinationMobile sm:bg-destinationTablet lg:bg-destinationDesktop w-full h-full centerBg">
    <div class="wrapper container flex items-center flex-col justify-evenly h-full">
      <DestinationHeader :image="image" />
      <DestinationNav :index="destinationStore.destinationIndex" />
    </div>
  </section>
</template>
