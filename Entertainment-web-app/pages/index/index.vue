<script setup lang="ts">
definePageMeta({
  middleware: [
    'auth',
    // Add in more middleware here
  ]
});
</script>

<template>
  <h1>Hello from index / main page</h1>
</template>