<script lang="ts" setup>
import { useNavToggle } from '@/stores/toggleNav'
import { AnOutlinedClose, ChMenuHamburger } from '@kalimahapps/vue-icons'
const toggleStore = useNavToggle()

const animateToggle = () => {
  toggleStore.toggleNav()
}
</script>

<template>
  <div class="md:hidden">
    <div class="p-100 absolute z-50 top-200 right-100">
      <AnOutlinedClose @click="toggleStore.toggleNav" v-if="toggleStore.isNavOpen"
        class="text-lightBlue text-preset4 cursor-pointer" />
      <ChMenuHamburger @click="toggleStore.toggleNav" v-else class="text-lightBlue text-preset4 cursor-pointer" />
    </div>

    <div :class="{ slideIn: toggleStore.isNavOpen === true, slideOut: toggleStore.isNavOpen === false }"
      class="w-full flex fixed z-40 h-full">
      <div @click="animateToggle" class="w-[30%] h-full bg-transparent z-30"></div>

      <nav class="flex glassBg w-[70%] h-full flex-col uppercase">

        <div class="mt-1600 flex flex-col gap-400">

          <RouterLink @click="animateToggle" to="/" class="flex items-center pl-500 gap-100 text-preset8 w-full"
            exactActiveClass="activeMobileMenu">
            <span class="font-bold">00</span>
            <p>Home</p>
          </RouterLink>

          <RouterLink @click="animateToggle" to="/destination"
            class="flex items-center pl-500 gap-100 text-preset8 w-full" exactActiveClass="activeMobileMenu">
            <span class="font-bold">01</span>
            <p>Destination</p>
          </RouterLink>


          <RouterLink @click="animateToggle" to="/crew" class="flex items-center pl-500 gap-100 text-preset8 w-full"
            exactActiveClass="activeMobileMenu">
            <span class="font-bold">02</span>
            <p>Crew</p>
          </RouterLink>


          <RouterLink @click="animateToggle" to="/technology"
            class="flex items-center pl-500 gap-100 text-preset8 w-full" exactActiveClass="activeMobileMenu">
            <span class="font-bold">03</span>
            <p>Technology</p>
          </RouterLink>
        </div>
      </nav>
    </div>
  </div>

</template>
