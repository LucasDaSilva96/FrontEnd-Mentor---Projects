import sound from '../../public/sound/alarm.wav'
import { useSound } from '@vueuse/sound'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useSoundStore = defineStore('soundStore', () => {
  const { play, stop } = useSound(sound)

  const playing = ref(false)

  return {
    play,
    stop,
    playing
  }
})
