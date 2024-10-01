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

</script>

<template>
  <div>
    <h1 class="text-center py-2">Hello from sign up page</h1>
  </div>
</template>