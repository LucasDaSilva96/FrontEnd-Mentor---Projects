<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="p-4">
      <Nav />
    </div>
    <main class="w-full py-4 px-2 space-y-2">
      <SearchBar placeholder="Search for movies or TV series" />
      <slot />
    </main>
  </div>
</template>