<script setup lang="ts">

const loadingStore = useLoadingStore()

const route = useRoute()

</script>

<template>
  <div class="w-full flex flex-col lg:flex-row bg-darkBlue">
    <div class="p-4 lg:min-w-[90px]">
      <div class="lg:fixed z-[100]">
        <Nav />
      </div>
    </div>
    <main class="w-full py-4 px-2 lg:px-14 space-y-2 overflow-x-hidden">
      <SearchBar placeholder="Search for movies or TV series" />
      <slot />
    </main>
    <Loader :isLoading="loadingStore.isLoading || false" />
  </div>
</template>
