import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useNavToggle = defineStore('navToggle', () => {
  const isNavOpen = ref(false)
  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }

  return {
    isNavOpen: computed(() => isNavOpen.value),
    toggleNav
  }
})
