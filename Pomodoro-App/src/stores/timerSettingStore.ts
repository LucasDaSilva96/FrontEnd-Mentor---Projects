import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTimerSettingStore = defineStore(
  'timerSettingStore',
  () => {
    // STATE
    const pomodoroTime = ref(1)
    const shortBreakTime = ref(1)
    const longBreakTime = ref(1)

    // SETTERS
    function setPomodoroTime(value: number) {
      pomodoroTime.value = value
    }

    function setShortBreakTime(value: number) {
      shortBreakTime.value = value
    }

    function setLongBreakTime(value: number) {
      longBreakTime.value = value
    }

    // COMPUTED
    const pomodoro = computed(() => pomodoroTime.value)
    const shortBreak = computed(() => shortBreakTime.value)
    const longBreak = computed(() => longBreakTime.value)

    return {
      pomodoro,
      shortBreak,
      longBreak,
      setPomodoroTime,
      setShortBreakTime,
      setLongBreakTime
    }
  },
  {
    persist: true
  }
)

// 1,2,
