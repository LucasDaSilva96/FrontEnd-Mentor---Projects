<script lang="ts" setup>
import { type SignUpSchema, signUpSchema } from '~/schemas/signUp';
import type { FormSubmitEvent } from '~/types/form';

const toast = useToast()

const { createUser } = useDirectusAuth();

const state = reactive({
  email: "",
  password: "",
  passwordConfirmation: ""
})

const loadingStore = useLoadingStore()
const { isLoading } = storeToRefs(loadingStore)



async function onSubmit(event: FormSubmitEvent<SignUpSchema>) {
  if (!event.data) return
  const { email, password, passwordConfirmation } = event.data
  if (!email || !password || !passwordConfirmation) return

  try {
    loadingStore.setLoading(true)

    const newUser = await createUser({ email, password })

    if (!newUser) {
      throw new Error('User not created. Try again.')
    }

    toast.add({
      title: 'Success',
      description: 'User created successfully',
      icon: 'i-mdi-check',
      color: 'green'
    })

    await navigateTo('/login')

  } catch (error) {
    toast.add({
      title: 'Error',
      description: catchError(error),
      icon: 'i-mdi-alien',
      color: 'gray'
    })
  } finally {
    loadingStore.setLoading(false)
  }

}

</script>


<template>
  <div
    class=" min-w-[327px] max-w-[400px] w-full p-5 bg-semiDarkBlur min-h-[373px] rounded-lg flex flex-col justify-evenly gap-3">
    <h1 class="heading-L">Sign Up</h1>

    <UForm :schema="signUpSchema" :state="state" class="space-y-6" @submit.prevent="onSubmit">


      <UFormGroup name="email" class="text-center text-red">
        <UInput v-model="state.email" autocomplete="email" placeholder="Email address" variant="none"
          class="text-white text-center border-b border-white/50  py-2" />
      </UFormGroup>

      <UFormGroup name="password" class="text-center text-red">
        <UInput v-model="state.password" autocomplete="new-password" type="password" placeholder="Password"
          variant="none" class="text-white border-b border-white/50 py-2" />
      </UFormGroup>


      <UFormGroup name="passwordConfirmation" class="text-center text-red">
        <UInput v-model="state.passwordConfirmation" autocomplete="off" type="password" placeholder="Repeat password"
          variant="none" class="text-white border-b border-white/50 py-2" />
      </UFormGroup>



      <button type="submit" :disabled="isLoading"
        class="bg-red w-full flex items-center justify-center rounded-md py-3 transition-colors hover:bg-white hover:text-black body-M focus:bg-red focus:text-white">
        <span v-if="!isLoading">
          Create an account
        </span>
        <p v-else class="flex items-center gap-2">
          <span class="mr-2">Creating...</span>
          <UIcon name="i-mdi-loading" class="animate-spin" size="22" />
        </p>
      </button>


    </UForm>

    <div>
      <p class="body-M text-center mt-3">
        Already have an account? <NuxtLink class="text-red ml-2" to="/login">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>
