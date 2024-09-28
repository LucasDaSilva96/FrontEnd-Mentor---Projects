<script setup lang="ts">
import { formatTime } from '@/utils/timerOutput';
import { computed } from 'vue';


const props = defineProps<{
  time: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}>();

const timeOutput = computed(() => formatTime(props.time));
</script>

<template>
  <div
    class="min-w-[300px] min-h-[320px] max-w-[370px] max-h-[420px] w-full h-full relative rounded-[50%] gradientClockBg p-6 flex items-center justify-center">


    <div class="rounded-[50%] min-h-[300px] w-full h-full bg-[#161932] p-4">

      <div
        class="rounded-[50%] min-h-[280px] w-full h-full border flex flex-col items-center justify-evenly p-4 text-center">

        <h1 class="H1">{{ timeOutput }}</h1>

        <p class="H3 uppercase">{{ isRunning ? "Pause" : "Restart" }}</p>
      </div>



    </div>



  </div>
</template>