<script setup lang="ts">
import { useCountDownStore } from '@/stores/countDownStore';
import { computed, watch } from 'vue';
import { onMounted } from 'vue';
import Clock from './Clock.vue';

const TIMER_STORE = useCountDownStore()

TIMER_STORE.beforeUnmount()


let soundButton: HTMLAudioElement;

onMounted(() => {
  soundButton = document.getElementById('sound') as HTMLAudioElement;

  const playSound = computed(() => TIMER_STORE.completed);

  watch(playSound, () => {
    soundButton.play();
  });
});


</script>

<template>
  <Clock :isPaused="TIMER_STORE.paused" :time="TIMER_STORE.currentTime" :isRunning="TIMER_STORE.running"
    :start="TIMER_STORE.start" :pause="TIMER_STORE.pause" :reset="TIMER_STORE.reset" :isDone="TIMER_STORE.isDone" />
  <audio controls id="sound" class="sr-only">
    <source src="/sound/alarm.wav" type="audio/wav">
  </audio>
</template>