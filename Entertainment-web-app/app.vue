<script setup lang="ts">
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

</script>

<template>
  <div class="font-outline">

    <NuxtLayout>
      <UContainer>
        <NuxtPage />
      </UContainer>
      <UNotifications />
    </NuxtLayout>

  </div>
</template>
