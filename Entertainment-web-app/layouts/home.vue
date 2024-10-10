<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="p-4 lg:min-w-[90px]">
      <div class="lg:fixed">
        <Nav />
      </div>
    </div>
    <main class="w-full py-4 px-2 lg:px-14 space-y-2 overflow-x-hidden">
      <SearchBar placeholder="Search for movies or TV series" />
      <slot />
    </main>
  </div>
</template>
