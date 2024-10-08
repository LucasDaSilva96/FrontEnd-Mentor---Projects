<script setup lang="ts">
import type { DataItem } from '~/types/data';
definePageMeta({
  layout: 'home'
})


useSeoMeta({
  title: 'Entertainment Web App',
  description: 'Entertainment Web App. This is the main page of the Entertainment Web App.',
  keywords: 'Entertainment, Web App',
});



const toast = useToast();
const { getItems } = useDirectusItems();
const data = ref<DataItem[]>([])

const isLoading = ref(true)

const isTrendingData = computed<DataItem[]>(() => data.value.filter(item => item.isTrending))

const notTrendingData = computed<DataItem[]>(() => data.value.filter(item => !item.isTrending))


const screenWidth = ref(window.innerWidth);

const amountOfSlides = computed(() => {
  if (screenWidth.value < 700) return 1
  return 2
})

onMounted(async () => {


  try {
    const items = await getItems<DataItem>({ collection: 'data' })
    if (!items) return

    // Create image url
    items.forEach(item => {
      item.thumbnail_large = createImageUrl(item.thumbnail_large)
      item.thumbnail_small = createImageUrl(item.thumbnail_small)
      item.thumbnail_medium = createImageUrl(item.thumbnail_medium)
    })

    data.value = items
  } catch (error) {
    console.error(error)
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray'
    })
  } finally {
    isLoading.value = false
  }

  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
  return () => {
    window.removeEventListener('resize', () => {
      screenWidth.value = window.innerWidth;
    });
  };

})


</script>

<template>

  <div v-if="!isLoading">

    <header class="flex flex-col gap-4 w-full overflow-hidden">
      <h1 class="heading-L">Trending</h1>

      <swiper-container v-if="isTrendingData" :slides-per-view="amountOfSlides" class="w-[1200px] md:space-x-[-130px]">

        <swiper-slide v-for="(item, index) in isTrendingData" :key="index">
          <Card :data="item" />
        </swiper-slide>
        <swiper-slide class="min-w-[100px] hidden md:block"></swiper-slide>
      </swiper-container>



    </header>

    <section class="w-full space-y-4 mt-4">
      <h2 class="heading-L">Recommended for you</h2>

      <div v-if="notTrendingData" class="flex items-center gap-4 flex-wrap">
        <Card v-for="(item, index) in notTrendingData" :key="index" :data="item" />
      </div>
    </section>

  </div>

  <Loader :isLoading="isLoading" />

</template>