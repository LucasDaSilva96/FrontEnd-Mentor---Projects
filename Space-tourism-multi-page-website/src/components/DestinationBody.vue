<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
  distance: string;
  travel: string;

}>();

</script>

<template>
  <article>
    <h3>{{ title }}</h3>

    <p>{{ description }}</p>

    <hr>

    <div></div>
  </article>
</template>