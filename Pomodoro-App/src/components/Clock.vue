<script setup lang="ts">
import { useColorStore } from '@/stores/colorStore';
import { formatTime } from '@/utils/timerOutput';
import { computed } from 'vue';

const props = defineProps<{
  time: number;
  isRunning: boolean;
  isDone: boolean;
  isPaused: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
}>();

const colorStore = useColorStore();

function handleClick() {
  if (props.isRunning) {
    props.pause();
  } else if (props.isPaused) {
    props.start();
  } else if (props.isDone) {
    props.start();
  } else {
    props.start();
  }
}

const timeOutput = computed(() => formatTime(props.time));

const progressNumber = computed(() => {
  // Convert time to seconds, then to percentage from 100 to 0
  return Math.floor((props.time / 1000) - 100);
});

console.log(progressNumber.value);

</script>

<template>
  <div
    class="min-w-[300px] min-h-[320px] max-w-[370px] max-h-[420px] w-full h-full relative rounded-[50%] gradientClockBg p-6 flex items-center justify-center">


    <div class="rounded-[50%] min-h-[300px] w-full h-full bg-[#161932] p-4 relative">

      <div class="rounded-[50%] min-h-[280px] w-full h-full flex flex-col items-center justify-evenly p-4 text-center">

        <h1 class="H1">{{ timeOutput }}</h1>

        <button
          :class="{ 'hover:text-blue': colorStore.color === 'blue', 'hover:text-red': colorStore.color === 'red', 'hover:text-purple': colorStore.color === 'purple' }"
          @click="handleClick" v-if="!isDone" class="H3 uppercase transition-colors ease-in z-50">{{ isRunning ? "Pause"
            :
            isPaused ?
              "restart" :
              "Start" }}</button>

        <button :class="{}" @click="handleClick" v-else class="H3 uppercase z-50">Start</button>

      </div>

      <div class="absolute top-0 right-0">

        <div class="relative size-80">
          <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
            <!-- Background Circle -->
            <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200 dark:text-neutral-700"
              stroke-width="2"></circle>
            <!-- Progress Circle -->
            <circle cx="18" cy="18" r="16" fill="none" class="stroke-red" stroke-width="1.8" stroke-dasharray="100"
              :stroke-dashoffset="progressNumber" stroke-linecap="round"></circle>
          </svg>
        </div>


      </div>


    </div>



  </div>
</template>