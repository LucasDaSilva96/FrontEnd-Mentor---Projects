<script setup lang="ts">
import type { DataItem } from '~/types/data';


const screenWidth = ref(0);

const amountOfSlides = computed(() => {
  if (screenWidth.value < 620) {
    return 1;
  } else if (screenWidth.value >= 620 && screenWidth.value < 800) {
    return 1.2;
  } else if (screenWidth.value >= 620 && screenWidth.value < 1000) {
    return 1.3;
  } else {
    return 1.8;
  }
});

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
  return () => {
    window.removeEventListener('resize', () => {
      screenWidth.value = window.innerWidth;
    });
  };
});




const props = defineProps<{
  isTrendingData: DataItem[];
}>();

</script>


<template>
  <ClientOnly fallback="Loading...">
    <Swiper v-if="props.isTrendingData.length" :slides-per-view="amountOfSlides" class="w-full min-w-[1000px]"
      :space-between="0">
      <SwiperSlide v-for="(item, index) in isTrendingData" :key="index">
        <Card :data="item" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>