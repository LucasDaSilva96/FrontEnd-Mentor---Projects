<script setup lang="ts">
import type { DataItem } from '~/types/data';

definePageMeta({
  layout: 'home',
})

const dataStore = useDataStore();
const { getSeries } = storeToRefs(dataStore)


const loadingStore = useLoadingStore();
const { isLoading } = storeToRefs(loadingStore);
const { getItems } = useDirectusItems();
const toast = useToast();

onMounted(async () => {
  try {
    if (!getSeries.value.length) {
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
  <section v-if="getSeries.length > 0" class="flex items-center gap-4 flex-wrap">
    <Card :is-carousel="false" v-for="(item, index) in getSeries" :key="index" :data="item" />
  </section>

  <div v-else-if="!isLoading && !getSeries.length">
    <h1 class="heading-L">No TV-series found</h1>
  </div>

</template>