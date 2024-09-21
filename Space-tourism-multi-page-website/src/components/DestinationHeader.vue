<script lang="ts" setup>
const props = defineProps<{
  image: string;
}>();

</script>
<template>
  <div class="flex flex-col gap-100 items-center md:items-start">
    <h2 class="flex items-center gap-300 text-preset5">
      <span class="text-white/50">01</span>
      <span>PICK YOUR DESTINATION</span>
    </h2>
    <div class="max-w-[228.54px] max-h-[228.54px] sm:max-w-[457.08px] sm:max-h-[457.08px]">
      <img :src="image" alt="destination" class="w-full h-full object-cover" />
    </div>
  </div>
</template>