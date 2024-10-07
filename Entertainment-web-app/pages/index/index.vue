<script setup lang="ts">
useSeoMeta({
  title: 'Entertainment Web App',
  description: 'Entertainment Web App. This is the main page of the Entertainment Web App.',
  keywords: 'Entertainment, Web App',
});

const { logout } = useDirectusAuth();

const handleLogout = async () => {
  await logout();
  return navigateTo('/login');
};

</script>

<template>
  <header class="flex w-full items-center p-2 justify-between">
    <h1>Hello from index / main page</h1>
    <button @click="handleLogout" class="bg-red py-2 px-4 rounded-md">Logout</button>
  </header>
</template>