import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const useDestinationNav = defineStore('destinationNav', () => {
  const destinationIndex = ref(0)

  const setDestinationIndex = (index: number) => {
    destinationIndex.value = index
  }

  return {
    destinationIndex: computed(() => destinationIndex.value),
    setDestinationIndex
  }
})
