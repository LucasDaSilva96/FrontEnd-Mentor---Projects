import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimerSettingStore = defineStore(
  'timerSettingStore',
  () => {
    // STATE
    const pomodoroTime = ref(25)
    const shortBreakTime = ref(5)
    const longBreakTime = ref(15)
    // Start time for the timer
    const startTime = ref(25)
    const startTime_shortBreak = ref(5)
    const startTime_longBreak = ref(15)

    // SETTERS
    function setPomodoroTime(value: number) {
      pomodoroTime.value = value
      startTime.value = value
    }

    function setShortBreakTime(value: number) {
      shortBreakTime.value = value
      startTime_shortBreak.value = value
    }

    function setLongBreakTime(value: number) {
      longBreakTime.value = value
      startTime_longBreak.value = value
    }

    // COMPUTED
    const pomodoro = computed(() => pomodoroTime.value)
    const shortBreak = computed(() => shortBreakTime.value)
    const longBreak = computed(() => longBreakTime.value)
    const startValue = computed(() => startTime.value)
    const startValue_shortBreak = computed(() => startTime_shortBreak.value)
    const startValue_longBreak = computed(() => startTime_longBreak.value)

    return {
      pomodoro,
      shortBreak,
      longBreak,
      setPomodoroTime,
      setShortBreakTime,
      setLongBreakTime,
      startValue,
      startValue_shortBreak,
      startValue_longBreak
    }
  },
  {
    persist: true
  }
)
