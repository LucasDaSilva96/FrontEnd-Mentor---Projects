<script setup lang="ts">
import { useColorStore } from '@/stores/colorStore';
import { useCurrentLoopStore } from '@/stores/currentLoopStore';
import { computed, ref } from 'vue';

const currentColorStore = useColorStore()
const currentLoopStore = useCurrentLoopStore()

const isActive = computed(() => {
  return currentLoopStore.loop
})




</script>

<template>
  <div class="bg-[#161932]  h-[63px] rounded-[31.5px] flex items-center justify-evenly p-1.5 gap-3">


    <div
      class="w-[120px] h-[48px] rounded-[26.5px] flex items-center justify-center opacity-50 transition-colors will-change-auto hover:opacity-100 cursor-pointer"
      :class="{
        'bg-red text-darkBlue !opacity-100': currentColorStore.color === 'red' && isActive === 'pomodoro',
        'bg-blue text-darkBlue !opacity-100': currentColorStore.color === 'blue' && isActive === 'pomodoro',
        'bg-purple text-darkBlue !opacity-100': currentColorStore.color === 'purple' && isActive === 'pomodoro',
      }">
      <p class="displayHeader">pomodoro
      </p>
    </div>

    <div
      class="w-[120px] h-[48px] rounded-[26.5px] flex items-center justify-center opacity-50 transition-colors will-change-auto hover:opacity-100 cursor-pointer"
      :class="{
        'bg-red text-darkBlue !opacity-100': currentColorStore.color === 'red' && isActive === 'shortBreak',
        'bg-blue text-darkBlue !opacity-100': currentColorStore.color === 'blue' && isActive === 'shortBreak',
        'bg-purple text-darkBlue !opacity-100': currentColorStore.color === 'purple' && isActive === 'shortBreak'
      }">
      <p class="displayHeader">short
        break
      </p>

    </div>

    <div
      class="w-[120px] h-[48px] rounded-[26.5px] flex items-center justify-center opacity-50 transition-colors will-change-auto hover:opacity-100 cursor-pointer"
      :class="{
        'bg-red text-darkBlue !opacity-100': currentColorStore.color === 'red' && isActive === 'longBreak',
        'bg-blue text-darkBlue !opacity-100': currentColorStore.color === 'blue' && isActive === 'longBreak',
        'bg-purple text-darkBlue !opacity-100': currentColorStore.color === 'purple' && isActive === 'longBreak'
      }">
      <p class="displayHeader">long break
      </p>
    </div>
  </div>

</template>