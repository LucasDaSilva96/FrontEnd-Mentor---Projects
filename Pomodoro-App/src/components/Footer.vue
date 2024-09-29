<script setup lang="ts">
import { useModelStore } from '@/stores/ModelStore';


const modalStore = useModelStore();

</script>

<template>
  <img @click="modalStore.setIsOpen(true)"
    class="opacity-85 transition-all hover:opacity-100 hover:rotate-180 cursor-pointer hover:scale-105"
    src="/assets/icon-settings.svg" alt="Settings logo" />
</template>