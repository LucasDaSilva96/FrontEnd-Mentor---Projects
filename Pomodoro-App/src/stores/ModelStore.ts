import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModelStore = defineStore(
  'modelStore',
  () => {
    const isOpenValue = ref(false)

    function setIsOpen(value: boolean) {
      isOpenValue.value = value
    }

    const isOpen = computed(() => isOpenValue.value)

    return {
      isOpen,
      setIsOpen
    }
  },
  {
    persist: true
  }
)
