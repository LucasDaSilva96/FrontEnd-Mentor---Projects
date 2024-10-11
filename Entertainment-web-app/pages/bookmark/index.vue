<script setup lang="ts">
import type { DataItem } from '~/types/data';

definePageMeta({
  layout: 'home',
})

const dataStore = useDataStore();
const { getBookmarks } = storeToRefs(dataStore)
const loadingStore = useLoadingStore()
const toast = useToast();
const { getItems } = useDirectusItems();


onMounted(async () => {

  try {

    if (!dataStore.getBookmarks || !dataStore.getBookmarks.length) {


      loadingStore.setLoading(true)

      const items = await getItems<DataItem>({ collection: 'data' }) || [];

      dataStore.setData(items)
    }


    return

  } catch (error) {
    console.error(error);
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray',
    });
  } finally {
    loadingStore.setLoading(false)
  }

})

</script>

<template>
  <section v-if="getBookmarks.length > 0" class="flex items-center gap-4 flex-wrap">
    <Card :is-carousel="false" v-for="(item, index) in getBookmarks" :key="index" :data="item" />
  </section>

  <div v-else>
    <h1 class="heading-L">No bookmarks found</h1>
  </div>

</template>