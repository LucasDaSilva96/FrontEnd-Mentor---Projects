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

const { logout } = useDirectusAuth();


const toast = useToast();
const { getItems } = useDirectusItems();
const data = ref<DataItem[]>([])

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
  }
})

const handleLogout = async () => {
  await logout();
  return navigateTo('/login');
};


</script>

<template>

  <header class="flex flex-col gap-4 w-full">
    <h1 class="heading-L">Trending</h1>

    <Card v-for="(item, index) in data" :key="index" :data="item" />
  </header>


</template>