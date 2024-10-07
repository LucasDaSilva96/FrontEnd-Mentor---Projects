<script lang="ts" setup>
import { loginSchema, type LoginSchema } from '~/schemas/login';
import type { FormSubmitEvent } from '~/types/form';

const toast = useToast()

const { login } = useDirectusAuth();

const state = reactive({
  email: "",
  password: ""
})

const isLoading = ref(false)


async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  if (!event.data) return
  const { email, password } = event.data
  if (!email || !password) return

  try {
    isLoading.value = true

    await login({ email, password });

    await navigateTo('/')

  } catch (error) {
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray'
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div
    class="min-w-[327px] max-w-[400px] w-full p-5 bg-semiDarkBlur min-h-[373px] rounded-lg flex flex-col justify-evenly gap-3">
    <h1 class="heading-L">Login</h1>

    <UForm :schema="loginSchema" :state="state" class="space-y-6" @submit.prevent="onSubmit">
      <UFormGroup name="email" class="text-center text-red">
        <UInput v-model="state.email" autocomplete="username" placeholder="Email address" variant="none"
          class="text-white text-center border-b border-white/50 py-2" />
      </UFormGroup>

      <UFormGroup name="password" class="text-center text-red">
        <UInput v-model="state.password" autocomplete="current-password" type="password" placeholder="Password"
          variant="none" class="text-white border-b border-white/50 py-2" />
      </UFormGroup>

      <button type="submit" :disabled="isLoading"
        class="bg-red w-full flex items-center justify-center rounded-md py-3 transition-colors hover:bg-white hover:text-black body-M focus:bg-red focus:text-white">
        <span v-if="!isLoading">
          Login to your account
        </span>
        <p v-else class="flex items-center gap-2">
          <span class="mr-2">Logging in...</span>
          <UIcon name="i-mdi-loading" class="animate-spin" size="22" />
        </p>
      </button>
    </UForm>

    <div>
      <p class="body-M text-center mt-3">
        Don't have an account?
        <NuxtLink class="text-red ml-2" to="/signUp">Sign Up</NuxtLink>
      </p>
    </div>
  </div>
</template>
