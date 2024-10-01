<script setup lang="ts">
const title = ref('Login')

const { data, status } = useLazyFetch('/api/hello')

</script>

<template>
  <!-- SEO -->

  <Head>
    <Title>Login</Title>
    <Meta name="description" :content="title">
    </Meta>
  </Head>


  <h1 class="text-center py-2">Hello from auth page</h1>
  <p v-if="status === 'pending'" class="animate-bounce">Loading..</p>
  <p v-else-if="status === 'error'">Error</p>
  <p v-else-if="status === 'success'">{{ data }}</p>
</template>