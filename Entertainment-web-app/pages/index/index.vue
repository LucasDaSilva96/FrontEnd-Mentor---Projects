<script setup lang="ts">
import type { DataItem } from '~/types/data';
definePageMeta({
  layout: 'home',

});

useSeoMeta({
  title: 'Entertainment Web App',
  description:
    'Entertainment Web App. This is the main page of the Entertainment Web App.',
  keywords: 'Entertainment, Web App',
});



const toast = useToast();
const { getItems } = useDirectusItems();


const dataStore = useDataStore();

const { getDataAllData: data, getIsTrending: isTrendingData, getNotTrending: notTrendingData } = storeToRefs(dataStore)


const loadingStore = useLoadingStore()
const { isLoading } = storeToRefs(loadingStore)


onMounted(async () => {

  try {

    if (!dataStore.getDataAllData || !dataStore.getDataAllData.length) {


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
  <div v-if="!isLoading && data">
    <header class="max-w-[1100px] space-y-4 overflow-hidden">
      <h1 class="heading-L text-white">Trending</h1>

      <Carousel :isTrendingData="isTrendingData" />

    </header>
    <section class="w-full space-y-4 mt-4">
      <h2 class="heading-L text-white">Recommended for you</h2>


      <div v-if="notTrendingData" class="flex items-center gap-4 flex-wrap">
        <Card :is-carousel="false" v-for="(item, index) in notTrendingData" :key="index" :data="item" />
      </div>
    </section>
  </div>

</template>
