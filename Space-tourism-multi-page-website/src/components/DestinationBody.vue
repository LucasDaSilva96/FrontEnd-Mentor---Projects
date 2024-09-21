<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  distance: string;
  travel: string;

}>();

</script>

<template>
  <article class="flex flex-col gap-150 items-center">
    <h3 class="text-preset3 uppercase">{{ title }}</h3>

    <p class="text-preset8 text-lightBlue leading-[27px] max-w-[327px] 
    md:max-w-[514px]">{{ description }}</p>

    <hr class="p-25 text-white w-full">

    <div class="flex flex-col sm:flex-row sm:justify-around w-full gap-150 text-center">
      <div class="flex flex-col">
        <h4 class="text-preset7 text-lightBlue">AVG. DISTANCE</h4>
        <p class="text-preset5">{{ distance }}</p>
      </div>

      <div>
        <h5 class="text-preset7 text-lightBlue">EST. TRAVEL TIME</h5>
        <p class="text-preset5">{{ travel }}</p>
      </div>
    </div>
  </article>
</template>