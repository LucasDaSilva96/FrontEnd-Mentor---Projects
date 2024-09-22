<script setup lang="ts">
import DestinationBody from '@/components/DestinationBody.vue';
import DestinationHeader from '@/components/DestinationHeader.vue';
import DestinationNav from '@/components/DestinationNav.vue';
import data from "@/data/data.json"
import { useDestinationNav } from '@/stores/destinationNav';
import type { Destination } from '@/types/destination';
import { computed } from 'vue';

const destination = data.destinations as Destination[]
const destinationStore = useDestinationNav()

const image = computed(() => destination[destinationStore.destinationIndex].images.webp)

const currentData = computed(() => destination[destinationStore.destinationIndex])

</script>

<template>
  <section class="bg-destinationMobile sm:bg-destinationTablet lg:bg-destinationDesktop w-full h-full centerBg px-200">
    <div class="wrapper container flex flex-col md:flex-row items-center h-full">
      <h2 class="flex items-center gap-300 text-preset8 md:self-start pt-300 min-w-[250px]">
        <span class="text-white/50 font-bold">01</span>
        <span>PICK YOUR DESTINATION</span>
      </h2>
      <div class="flex flex-col items-center gap-300 justify-center  h-full lg:flex-row">

        <DestinationHeader :image="image" />
        <div class="w-full flex flex-col items-center">

          <DestinationNav :index="destinationStore.destinationIndex" />
          <DestinationBody :title="currentData.name" :description="currentData.description"
            :distance="currentData.distance" :travel="currentData.travel" />
        </div>

      </div>
    </div>
  </section>
</template>
