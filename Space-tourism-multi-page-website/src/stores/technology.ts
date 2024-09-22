import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTechnology = defineStore('technology', () => {
  const technologyIndex = ref(0)

  const setTechnologyIndex = (index: number) => {
    technologyIndex.value = index
  }

  return {
    technologyIndex: computed(() => technologyIndex.value),
    setTechnologyIndex
  }
})
