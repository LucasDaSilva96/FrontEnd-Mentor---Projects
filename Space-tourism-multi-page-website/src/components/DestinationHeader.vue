<script lang="ts" setup>
const props = defineProps<{
  image: string;
}>();

</script>
<template>
  <div class="flex flex-col gap-100 lg:h-full lg:justify-around items-center lg:items-start w-full">
    <h2 class="flex items-center gap-300 text-preset8 md:self-start">
      <span class="text-white/50">01</span>
      <span>PICK YOUR DESTINATION</span>
    </h2>
    <div class="max-w-[150px] md:max-w-[200px] lg:max-w-[400px] ">
      <img :src="image" alt="destination" class="w-full h-full object-cover" />
    </div>
  </div>
</template>