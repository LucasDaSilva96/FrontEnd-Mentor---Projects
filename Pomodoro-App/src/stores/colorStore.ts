import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useColorStore = defineStore(
  'colorStore',
  () => {
    const colorValue = ref('red')

    function setColor(value: 'red' | 'blue' | 'purple') {
      colorValue.value = value
    }

    const color = computed(() => colorValue.value)

    return {
      color,
      setColor
    }
  },
  {
    persist: true
  }
)
