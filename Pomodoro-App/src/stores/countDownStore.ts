import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useTimerSettingStore } from './timerSettingStore'
import { useCurrentLoopStore } from './currentLoopStore'

export const useCountDownStore = defineStore(
  'countDownStore',
  () => {
    const TIMER_SETTING_STORE = useTimerSettingStore()
    const CURRENT_LOOP_STORE = useCurrentLoopStore()
    // STATE
    const time = ref(TIMER_SETTING_STORE.pomodoro * 60 * 1000) // in milliseconds
    const isRunning = ref(false)
    const isPaused = ref(false)
    const isCompleted = ref(false)
    // Track if the pomodoro is done
    const pomodoroDone = ref(false)

    const amountOfPomodoros = ref(4)

    // TIMER - STATE - ID
    const intervalId = ref<number | null>(null)

    // SETTERS
    function setIsRunning(value: boolean) {
      isRunning.value = value
    }

    function setIsPaused(value: boolean) {
      isPaused.value = value
    }

    function setIsCompleted(value: boolean) {
      isCompleted.value = value
    }

    // COMPUTED
    let currentTime = computed(() => time.value)
    const running = computed(() => isRunning.value)
    const paused = computed(() => isPaused.value)
    const completed = computed(() => isCompleted.value)
    const isDone = computed(() => pomodoroDone.value)

    // METHODS
    function start() {
      // if the timer is already running, do nothing
      if (isRunning.value) return
      setIsRunning(true)
      setIsPaused(false)

      if (isCompleted.value === true) {
        setTimeout(() => {
          setIsCompleted(false)
        }, 2000)
      } else {
        setIsCompleted(false)
      }

      pomodoroDone.value = false

      intervalId.value = setInterval(() => {
        time.value -= 1000

        if (time.value <= 0 && amountOfPomodoros.value === 4) {
          setIsCompleted(true)
          amountOfPomodoros.value--
          clearInterval(intervalId.value!)
          time.value = TIMER_SETTING_STORE.shortBreak * 60 * 1000
          CURRENT_LOOP_STORE.setCurrentLoop('shortBreak')
          setIsRunning(false)
          start()
        } else if (time.value <= 0 && amountOfPomodoros.value === 3) {
          setIsCompleted(true)
          amountOfPomodoros.value--
          clearInterval(intervalId.value!)
          time.value = TIMER_SETTING_STORE.pomodoro * 60 * 1000
          CURRENT_LOOP_STORE.setCurrentLoop('pomodoro')
          setIsRunning(false)
          start()
        } else if (time.value <= 0 && amountOfPomodoros.value === 2) {
          setIsCompleted(true)
          amountOfPomodoros.value--
          clearInterval(intervalId.value!)
          time.value = TIMER_SETTING_STORE.shortBreak * 60 * 1000
          CURRENT_LOOP_STORE.setCurrentLoop('shortBreak')
          setIsRunning(false)
          start()
        } else if (time.value <= 0 && amountOfPomodoros.value === 1) {
          setIsCompleted(true)
          amountOfPomodoros.value--
          clearInterval(intervalId.value!)
          time.value = TIMER_SETTING_STORE.shortBreak * 60 * 1000
          CURRENT_LOOP_STORE.setCurrentLoop('shortBreak')
          setIsRunning(false)
          start()
        } else if (time.value <= 0 && amountOfPomodoros.value === 0) {
          setIsCompleted(true)
          amountOfPomodoros.value--
          clearInterval(intervalId.value!)
          time.value = TIMER_SETTING_STORE.longBreak * 60 * 1000
          CURRENT_LOOP_STORE.setCurrentLoop('longBreak')
          setIsRunning(false)
          start()
        } else if (time.value <= 0 && amountOfPomodoros.value === -1) {
          pomodoroDone.value = true
          isCompleted.value = true
          setTimeout(() => {
            reset()
          }, 1000)
          return
        }
      }, 1000)
    }

    function pause() {
      if (isRunning.value === false) return
      setIsRunning(false)
      setIsPaused(true)
      clearInterval(intervalId.value!)
    }

    function reset() {
      setIsRunning(false)
      setIsPaused(false)
      setIsCompleted(false)
      if (intervalId.value) {
        clearInterval(intervalId.value)
      }
      time.value = TIMER_SETTING_STORE.pomodoro * 60 * 1000
      currentTime = computed(() => time.value)
      amountOfPomodoros.value = 4
      CURRENT_LOOP_STORE.setCurrentLoop('pomodoro')
    }

    // LIFECYCLE
    function beforeUnmount() {
      if (intervalId.value) clearInterval(intervalId.value)
    }

    return {
      currentTime,
      running,
      paused,
      completed,
      start,
      pause,
      reset,
      beforeUnmount,
      isDone
    }
  },
  {
    persist: true
  }
)
