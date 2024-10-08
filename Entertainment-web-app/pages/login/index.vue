<script setup lang="ts">
// SEO

useSeoMeta({
  title: 'Login',
  description: 'Login to your account',
  keywords: 'login, account, authentication',
  applicationName: 'Entertainment Web App',
})

const user = useDirectusUser();

if (user.value) {
  navigateTo('/')
}


</script>

<template>
  <section class="w-full h-screen flex flex-col items-center p-4 justify-center gap-14">
    <img src="../../assets/logo.svg" alt="logo icon" />
    <LoginForm />
  </section>

</template>