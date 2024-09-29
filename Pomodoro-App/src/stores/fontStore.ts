import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFontStore = defineStore(
  'fontStore',
  () => {
    const fontValue = ref('Kumbh-Sans')

    function setFont(value: 'Kumbh-Sans' | 'Roboto-Slab' | 'Space-Mono') {
      fontValue.value = value
    }

    const font = computed(() => fontValue.value)

    return {
      font,
      setFont
    }
  },
  {
    persist: true
  }
)
