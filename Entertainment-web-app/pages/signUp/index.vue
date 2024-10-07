<script setup lang="ts">
const title = ref('Sign Up')
// SEO
useHead({
  title,
  meta: [
    {
      name: 'description',
      content: 'Sign up page'
    }
  ]
})

const user = useDirectusUser();

if (user.value) {
  navigateTo('/')
}


</script>

<template>
  <section class="w-full h-screen flex flex-col items-center p-4 justify-center gap-14">
    <img src="../../assets/logo.svg" alt="logo icon" />
    <SignUpFrom />
  </section>
</template>