<script lang="ts" setup>
import { useNavToggle } from '@/stores/toggleNav';
import MobileNav from './MobileNav.vue'
const navStore = useNavToggle()
</script>

<template>
  <div class="absolute top-0 left-0 w-full">
    <header class="flex justify-between items-center h-1000 lg:h-[136px] pl-300 relative">
      <RouterLink to="/" @click="navStore.closeNav">
        <img src="/shared/logo.svg" class="w-500 md:w-600" />
      </RouterLink>
      <!-- Desktop navigation -->
      <nav class="hidden md:flex justify-evenly text-preset8 uppercase h-[90px] w-[85%] glassBg px-400">
        <RouterLink to="/"
          class="flex items-center gap-100 border-b-2 border-transparent hover:border-white transition-colors"
          exactActiveClass="activeMenu">
          <span class="font-bold">00</span>
          <p>Home</p>
        </RouterLink>

        <RouterLink to="/destination"
          class="flex items-center gap-100 border-b-2 border-transparent hover:border-white transition-colors"
          exactActiveClass="activeMenu">
          <span class="font-bold">01</span>
          <p>Destination</p>
        </RouterLink>

        <RouterLink to="/crew"
          class="flex items-center gap-100 border-b-2 border-transparent hover:border-white transition-colors"
          exactActiveClass="activeMenu">
          <span class="font-bold">02</span>
          <p>Crew</p>
        </RouterLink>

        <RouterLink to="/technology"
          class="flex items-center gap-100 border-b-2 border-transparent hover:border-white transition-colors"
          exactActiveClass="activeMenu">
          <span class="font-bold">03</span>
          <p>Technology</p>
        </RouterLink>
      </nav>
      <!-- Mobile navigation -->
      <MobileNav />
    </header>
  </div>
</template>
