<script lang="ts" setup>
import { gsap } from 'gsap';
import { onMounted, watch } from 'vue';

const props = defineProps<{
  image: string;
}>();

onMounted(() => {
  gsap.fromTo("#destinationHeader", { translateX: "-100%", scale: 0.3 }, { translateX: "0", scale: 1, duration: 1, ease: "power2.out" });
});

watch(() => props.image, () => {
  gsap.fromTo("#destinationHeader", { translateX: "-100%", scale: 0.3 }, { translateX: "0", scale: 1, duration: 1, ease: "power2.out" });
});

</script>
<template>
  <div class="max-w-[150px] md:max-w-[200px] lg:max-w-[400px]" id="destinationHeader">
    <img :src="image" alt="destination" class="w-full h-full object-cover" />
  </div>

</template>