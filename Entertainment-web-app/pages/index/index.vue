<script setup lang="ts">
import type { DataItem } from '~/types/data';
definePageMeta({
  layout: 'home',
  keepalive: true,
});

useSeoMeta({
  title: 'Entertainment Web App',
  description:
    'Entertainment Web App. This is the main page of the Entertainment Web App.',
  keywords: 'Entertainment, Web App',
});



const toast = useToast();
const { getItems } = useDirectusItems();
const data = ref<DataItem[]>([]);

const isLoading = useState('isLoading', () => true);

const isTrendingData = computed<DataItem[]>(() =>
  data.value.filter((item) => item.isTrending)
);

const notTrendingData = computed<DataItem[]>(() =>
  data.value.filter((item) => !item.isTrending)
);


await useAsyncData('data', async () => {
  try {

    const items = await getItems<DataItem>({ collection: 'data' });

    if (!items) {
      throw new Error('No items found');
    }

    // Create image url
    items.forEach((item) => {
      item.thumbnail_large = createImageUrl(item.thumbnail_large);
      item.thumbnail_small = createImageUrl(item.thumbnail_small);
      item.thumbnail_medium = createImageUrl(item.thumbnail_medium);
    });

    data.value = items;

  } catch (error) {
    console.error(error);
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray',
    });
  } finally {
    isLoading.value = false;
  }
});


</script>

<template>
  <div v-if="!isLoading && data">
    <header class="flex flex-col gap-4 w-full overflow-hidden">
      <h1 class="heading-L">Trending</h1>

      <Carousel :isTrendingData="isTrendingData" />

    </header>
    <section class="w-full space-y-4 mt-4">
      <h2 class="heading-L">Recommended for you</h2>

      <div v-if="notTrendingData" class="flex items-center gap-4 flex-wrap">
        <Card v-for="(item, index) in notTrendingData" :key="index" :data="item" />
      </div>
    </section>
  </div>

  <Loader :isLoading="isLoading || false" />
</template>
