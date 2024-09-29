<script setup lang="ts">
import { useColorStore } from '@/stores/colorStore';
import { useCountDownStore } from '@/stores/countDownStore';
import { useFontStore } from '@/stores/fontStore';
import { useModelStore } from '@/stores/ModelStore'
import { useTimerSettingStore } from '@/stores/timerSettingStore';
import { AnOutlinedClose, AkCheck } from '@kalimahapps/vue-icons'

import { computed, ref } from 'vue'

const modalStore = useModelStore()

const fontStore = useFontStore()

const timeStore = useTimerSettingStore()

const colorStore = useColorStore()

const countDownStore = useCountDownStore()

const isLoading = ref(false)

const fontsObg = ref([
  {
    label: 'Aa',
    value: 'Kumbh-Sans',
    isChecked: true,
    fontFamily: 'kumbhSans'
  },
  {
    label: 'Aa',
    value: 'Roboto-Slab',
    isChecked: false,
    fontFamily: 'robotoSlab'
  },
  {
    label: 'Aa',
    value: 'Space-Mono',
    isChecked: false,
    fontFamily: 'spaceMono'
  }
])

const colorsObg = ref([
  {
    value: 'red',
    isChecked: true
  },
  {
    value: 'blue',
    isChecked: false
  },
  {
    value: 'purple',
    isChecked: false
  }
])

const handleFontChange = (e: Event) => {
  const target = e.target as HTMLButtonElement
  fontsObg.value.forEach((font) => {
    if (font.value === target.value) {
      font.isChecked = true
    } else {
      font.isChecked = false
    }
  })
}

const handleColorChange = (e: Event) => {
  const target = e.target as HTMLButtonElement
  colorsObg.value.forEach((color) => {
    if (color.value === target.id) {
      color.isChecked = true
    } else {
      color.isChecked = false
    }
  })
}

const handleParentClick = (e: MouseEvent) => {
  if (e.target instanceof HTMLElement) {
    if (e.target.id === 'parent') {
      modalStore.setIsOpen(false)
    }
  }
}

const handleSubmit = (e: Event) => {
  isLoading.value = true
  const promodoro = (document.getElementById('promodoro') as HTMLInputElement).value
  const shortBreak = (document.getElementById('shortBreak') as HTMLInputElement).value
  const longBreak = (document.getElementById('longBreak') as HTMLInputElement).value
  const font = computed(() => fontsObg.value.find((font) => font.isChecked)).value
  const color = computed(() => colorsObg.value.find((color) => color.isChecked)).value

  if (!promodoro || !shortBreak || !longBreak || !font || !color) {
    window.alert('ERROR: Please try again or refresh the page')
    isLoading.value = false
    return
  }

  timeStore.setPomodoroTime(Number(promodoro))
  timeStore.setShortBreakTime(Number(shortBreak))
  timeStore.setLongBreakTime(Number(longBreak))

  fontStore.setFont(font.value as 'Kumbh-Sans' | 'Roboto-Slab' | 'Space-Mono')

  colorStore.setColor(color.value as 'red' | 'blue' | 'purple')

  setTimeout(() => {
    isLoading.value = false
    countDownStore.reset()
    modalStore.setIsOpen(false)
  }, 2500)

}
</script>

<template>
  <div id="parent" class="fixed z-[100] inset-0 bg-darkBlue/50 flex items-center justify-center backdrop-blur-sm p-4"
    @click="handleParentClick">
    <form @submit.prevent="handleSubmit"
      class="w-full h-full min-h-[549px] min-w-[327pz] bg-white max-w-[540px] max-h-[464px] rounded-[25px] flex flex-col gap-1 sm:gap-2 relative">
      <div class="w-full p-4 h-[70px] flex justify-between">
        <h2 class="font-bold text-2xl text-[#161932]">Settings</h2>

        <div @click="modalStore.setIsOpen(false)" class="self-end">
          <AnOutlinedClose class="hover:text-darkBlue cursor-pointer size-5" />
        </div>
      </div>
      <hr class="w-full border-[#E3E1E1] border-spacing-1.5" />

      <div class="p-4">
        <h3 class="text-sm font-bold text-darkBlue uppercase tracking-[5px]">time (minutes)</h3>

        <div class="w-full flex items-center justify-evenly flex-wrap gap-4">
          <label for="promodoro"
            class="flex justify-between w-full items-center sm:flex-col sm:justify-start sm:w-[145px] gap-1.5 text-sm">
            <span aria-label="promodoro minutes" class="font-bold leading-[14.88px] text-[#1e213fb4]">
              promodoro
            </span>
            <input type="number" id="promodoro" name="promodoro" required min="5" step="5" value="25"
              class="bg-[#EFF1FA] h-[48px] w-[140px] rounded-[10px] text-darkBlue px-2 font-bold" />
          </label>

          <label for="shortBreak"
            class="flex justify-between w-full items-center sm:flex-col sm:justify-start sm:w-[145px] gap-1.5 text-sm">
            <span aria-label="shortBreak minutes" class="font-bold leading-[14.88px] text-[#1e213fb4]">
              short break
            </span>
            <input type="number" id="shortBreak" name="shortBreak"
              class="bg-[#EFF1FA] h-[48px] w-[140px] rounded-[10px] text-darkBlue px-2 font-bold" required min="5"
              step="5" value="5" />
          </label>

          <label for="longBreak"
            class="flex justify-between w-full items-center sm:flex-col sm:justify-start sm:w-[145px] gap-1.5 text-sm">
            <span aria-label="long break minutes" class="font-bold leading-[14.88px] text-[#1e213fb4]">
              long break
            </span>
            <input type="number" id="longBreak" name="longBreak" min="5" step="5" value="15" required
              class="bg-[#EFF1FA] h-[48px] w-[140px] rounded-[10px] text-darkBlue px-2 font-bold" />
          </label>
        </div>
      </div>
      <div class="w-full px-4">
        <hr class="w-full border-[#E3E1E1] border-spacing-1.5" />
      </div>

      <div class="w-full p-4 flex flex-col sm:justify-between sm:flex-row sm:items-center gap-2">
        <h4 class="font-bold text-sm text-[#161932] tracking-[5px] uppercase">Font</h4>

        <div class="sm:w-[152px] h-[40px] flex items-center gap-2.5 w-full">
          <button v-for="(font, index) in fontsObg" :key="index" type="button" @click="handleFontChange"
            :value="font.value"
            class="w-[40px] h-[40px] bg-[#EFF1FA] rounded-full font-bold text-[#1e213fb4] hover:ring-[#EFF1FA] ring-2 ring-offset-4 ring-transparent"
            :class="{
              'font-spaceMono': font.fontFamily === 'spaceMono',
              'font-robotoSlab': font.fontFamily === 'robotoSlab',
              'font-kumbhSans': font.fontFamily === 'kumbhSans',
              '!bg-darkBlue text-white': font.isChecked
            }">
            {{ font.label }}
          </button>
        </div>
      </div>
      <div class="w-full px-4">
        <hr class="w-full border-[#E3E1E1] border-spacing-1.5" />
      </div>

      <div class="w-full p-4 flex flex-col sm:justify-between sm:flex-row sm:items-center gap-2.5">
        <h5 class="font-bold text-sm text-[#161932] tracking-[5px] uppercase">Color</h5>

        <div class="flex items-center gap-2.5">
          <button v-for="(color, index) in colorsObg" :key="index" type="button" @click="handleColorChange"
            :id="color.value"
            class="w-[40px] h-[40px] hover:ring-[#EFF1FA] ring-2 ring-offset-4 ring-transparent rounded-full flex items-center justify-center"
            :class="{
              'bg-red': color.value === 'red',
              'bg-blue': color.value === 'blue',
              'bg-purple': color.value === 'purple'
            }">
            <AkCheck v-if="color.isChecked" class="text-darkBlue transition-all will-change-auto" />
          </button>
        </div>
      </div>

      <button :disabled="isLoading" type="submit" class="ButtonDefault absolute -bottom-8 left-[35%]">{{ isLoading ?
        'Loading...' : 'Apply' }}</button>
    </form>
  </div>
</template>
