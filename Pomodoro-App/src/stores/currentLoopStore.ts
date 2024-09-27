import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentLoopStore = defineStore(
  'currentLoopStore',
  () => {
    const currentLoop = ref('pomodoro')

    function setCurrentLoop(value: 'pomodoro' | 'shortBreak' | 'longBreak') {
      currentLoop.value = value
    }

    const loop = computed(() => currentLoop.value)

    return {
      loop,
      setCurrentLoop
    }
  },
  {
    persist: true
  }
)
