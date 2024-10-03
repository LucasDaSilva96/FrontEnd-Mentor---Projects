<script lang="ts" setup>
import { loginSchema, type LoginSchema } from '~/schemas/login';
import type { FormSubmitEvent } from '~/types/form';

const state = reactive({
  email: "",
  password: ""
})

async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
  // Do something with data
  console.log(event)
}

</script>


<template>
  <UForm :schema="loginSchema" :state="state" class="space-y-4" @submit.prevent="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" autocomplete="email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" autocomplete="current-password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>
</template>
