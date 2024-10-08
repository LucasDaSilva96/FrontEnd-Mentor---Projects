<template>
  <div class="w-full flex flex-col">
    <aside class="p-4">
      <Nav />
    </aside>
    <main>
      <SearchBar />
      <slot />
    </main>
  </div>
</template>