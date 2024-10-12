<script setup lang="ts">
import type { DataItem } from '~/types/data';

definePageMeta({
  layout: 'home',
});
const dataStore = useDataStore();
const { getMovies } = storeToRefs(dataStore);

const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const { getItems } = useDirectusItems();
const toast = useToast();

onMounted(async () => {
  try {
    if (!getMovies.value.length) {
      loadingStore.setLoading(true);

      const items = (await getItems<DataItem>({ collection: 'data' })) || [];

      dataStore.setData(items);
    }

    return;
  } catch (error) {
    console.error(error);
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray',
    });
  } finally {
    loadingStore.setLoading(false);
  }
});
</script>

<template>
  <section v-if="getMovies.length > 0" class="flex items-center gap-4 flex-wrap">
    <Card v-for="(item, index) in getMovies" :key="index" :data="item" :is-carousel="false" />
  </section>

  <div v-else-if="!isLoading && getMovies.length === 0">
    <h1 class="heading-L text-white">No Movies found</h1>
  </div>
</template>
