declare module '@vueuse/sound' {
  export function useSound(url: string): { play: () => void; stop: () => void }
}
