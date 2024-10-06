<script lang="ts" setup>
import { type SignUpSchema, signUpSchema } from '~/schemas/signUp';
import type { FormSubmitEvent } from '~/types/form';

const state = reactive({
  email: "",
  password: "",
  passwordConfirmation: ""
})



async function onSubmit(event: FormSubmitEvent<SignUpSchema>) {
  if (!event.data) return
  const { email, password, passwordConfirmation } = event.data
  if (!email || !password || !passwordConfirmation) return
  console.log('Sign up', email, password, passwordConfirmation)

}

</script>


<template>
  <div
    class=" min-w-[327px] max-w-[400px] w-full p-5 bg-semiDarkBlur min-h-[373px] rounded-lg flex flex-col justify-evenly gap-3">
    <h1 class="heading-L">Sign Up</h1>

    <UForm :schema="signUpSchema" :state="state" class="space-y-6" @submit.prevent="onSubmit">


      <UFormGroup name="email" autocomplete="email" class="text-center text-red">
        <UInput v-model="state.email" placeholder="Email address" variant="none"
          class="text-white text-center border-b border-white/50  py-2" />
      </UFormGroup>

      <UFormGroup name="password" autocomplete="password" class="text-center text-red">
        <UInput v-model="state.password" type="password" placeholder="Password" variant="none"
          class="text-white border-b border-white/50 py-2" />
      </UFormGroup>


      <UFormGroup name="passwordConfirmation" autocomplete="off" class="text-center text-red">
        <UInput v-model="state.passwordConfirmation" type="password" placeholder="Repeat password" variant="none"
          class="text-white border-b border-white/50 py-2" />
      </UFormGroup>



      <button type="submit"
        class="bg-red w-full rounded-md py-3 transition-colors hover:bg-white hover:text-black body-M focus:bg-red focus:text-white">Create
        an account</button>
    </UForm>

    <div>
      <p class="body-M text-center mt-3">
        Already have an account? <NuxtLink class="text-red ml-2" to="/login">Login</NuxtLink>
      </p>
    </div>
  </div>
</template>
