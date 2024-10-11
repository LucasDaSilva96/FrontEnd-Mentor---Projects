import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false);

  function setLoading(status: boolean) {
    loading.value = status;
  }

  const isLoading = computed(() => loading.value);

  return {
    setLoading,
    isLoading,
  };
});
