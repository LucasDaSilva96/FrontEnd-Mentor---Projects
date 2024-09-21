import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCrewNav = defineStore('crewNav', () => {
  const crewIndex = ref(0)

  const setCrewIndex = (index: number) => {
    crewIndex.value = index
  }

  return {
    crewIndex: computed(() => crewIndex.value),
    setCrewIndex
  }
})
