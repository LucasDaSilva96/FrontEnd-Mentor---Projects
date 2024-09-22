<script lang="ts" setup>
const props = defineProps<{
  image: string;
}>();

</script>
<template>
  <div class="max-w-[150px] md:max-w-[200px] lg:max-w-[400px] ">
    <img :src="image" alt="destination" class="w-full h-full object-cover" />
  </div>

</template>