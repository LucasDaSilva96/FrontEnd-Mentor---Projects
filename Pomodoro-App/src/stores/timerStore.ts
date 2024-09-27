import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCurrentLoopStore } from './currentLoopStore'

export const useTimerStore = defineStore(
  'timerStore',
  () => {
    const currentLoopStore = useCurrentLoopStore()
    // Add the timerValue, shortBreakValue, and longBreakValue refs
    const timerValue = ref(25)
    const shortBreakValue = ref(5)
    const longBreakValue = ref(15)

    // Save the selected timer value
    const selectedTimer = ref(25)

    // Current loop value
    const currentLoop = ref(1)

    // Interval ID
    const intervalId = ref<number | null>(null)

    // Add the timer, shortBreak, and longBreak computed properties
    const timer = computed(() => timerValue.value)
    const shortBreakTimer = computed(() => shortBreakValue.value)
    const longBreakTimer = computed(() => longBreakValue.value)

    // PROMODORO Start, stop & reset the timer functions
    function startTimer() {
      currentLoopStore.setCurrentLoop('pomodoro')

      intervalId.value = setInterval(() => {
        timerValue.value--
        if (timerValue.value === 0) {
          if (intervalId.value) {
            clearInterval(intervalId.value!)
          }
          currentLoop.value++
          if (currentLoop.value === 4) {
            timerValue.value = longBreakTimer.value
            currentLoopStore.setCurrentLoop('longBreak')
          } else if (currentLoop.value < 4) {
            timerValue.value = shortBreakTimer.value
            currentLoopStore.setCurrentLoop('shortBreak')
          } else {
            stopTimer()
          }
        }
      }, 1000)
    }

    function stopTimer() {
      if (intervalId.value) {
        clearInterval(intervalId.value)
        intervalId.value = null
      }
    }

    function resetTimer() {
      stopTimer()
      currentLoop.value = 1
      timerValue.value = selectedTimer.value
      currentLoopStore.setCurrentLoop('pomodoro')
    }

    // Add the setTimer, setShortBreak, and setLongBreak functions
    function setTimer(value: number) {
      timerValue.value = value * 60
      selectedTimer.value = value * 60
    }

    function setShortBreak(value: number) {
      shortBreakValue.value = value * 60
    }

    function setLongBreak(value: number) {
      longBreakValue.value = value * 60
    }
  },
  {
    persist: true
  }
)
