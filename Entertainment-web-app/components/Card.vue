<script setup lang="ts">
import type { DataItem } from '~/types/data';

const props = defineProps<{
  data: DataItem;
  isCarousel: boolean;
}>();

const dataStore = useDataStore();

const screenWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
  return () => {
    window.removeEventListener('resize', () => {
      screenWidth.value = window.innerWidth;
    });
  };
});


const isMobile = computed(() => screenWidth.value < 768);
const isTablet = computed(
  () => screenWidth.value >= 768 && screenWidth.value < 1024
);


</script>

<template>
  <ClientOnly fallback-tag="span" fallback="Loading...">


    <article v-if="props.isCarousel"
      class="relative object-contain bg-center bg-no-repeat overflow-hidden rounded-xl group" :class="{
        'w-[320px] md:w-[440px] min-h-[220px] ': props.data.isTrending && isCarousel,
      }" :style="{
        backgroundImage: `url(${isMobile
          ? props.data.thumbnail_small
          : isTablet
            ? props.data.thumbnail_medium
            : props.data.thumbnail_large
          })`,
      }">
      <div class="absolute w-full h-full top-0 left-0 flex flex-col py-2 px-4">
        <div @click="dataStore.toggleBookmark(props.data.id)"
          class="bg-darkBlue/30 p-2.5 rounded-full ml-auto transition-all hover:fill-white cursor-pointer absolute top-2 right-2 z-20"
          :class="{
            'fill-transparent': !props.data.isBookmarked,
            '!fill-white': props.data.isBookmarked,
          }">

          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              stroke="#FFFF" stroke-width="2px" />
          </svg>

        </div>

        <div class="mt-auto w-full">
          <div class="flex items-center gap-2 text-white/75">
            <span>{{ props.data.year }}</span>
            <span class="w-1 h-1 bg-white rounded-full"></span>
            <span v-if="props.data.category === 'Movie'">
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                  fill="#FFF" opacity=".75" />
              </svg>
            </span>

            <span v-if="props.data.category === 'TV Series'">
              <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                  fill="#FFF" opacity=".75" />
              </svg>
            </span>

            <span class="w-1 h-1 bg-white rounded-full"></span>

            <span>{{ props.data.rating }}</span>
          </div>

          <h2 class="heading-XS md:heading-S text-white">
            {{ props.data.title }}
          </h2>
        </div>

      </div>

      <div
        class="absolute w-full h-full top-0 left-0 hidden group-hover:flex backdrop-blur-[0.5px] items-center justify-center cursor-grab">
        <button class="min-w-[117px] shadow-md bg-white/25 p-2 rounded-3xl flex items-center gap-4">
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
              fill="#FFF" />
          </svg>
          <span class="headingXS text-white">Play</span>
        </button>
      </div>
    </article>


    <article v-else class="flex flex-col gap-4">

      <div
        class="relative object-contain bg-center bg-no-repeat overflow-hidden rounded-xl group w-[164px] h-[110px] md:h-[140px] lg:w-[220px]"
        :style="{
          backgroundImage: `url(${isMobile
            ? props.data.thumbnail_small
            : isTablet
              ? props.data.thumbnail_medium
              : props.data.thumbnail_large
            })`,
        }">

        <div @click="dataStore.toggleBookmark(props.data.id)" class=" bg-darkBlue/30 p-2.5 rounded-full ml-auto transition-all hover:fill-white cursor-pointer absolute
          top-2 right-2 z-20" :class="{
            'fill-transparent': !props.data.isBookmarked,
            '!fill-white': props.data.isBookmarked,
          }">

          <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              stroke="#FFFF" stroke-width="2px" />
          </svg>

        </div>


        <div
          class="absolute w-full h-full top-0 left-0 hidden group-hover:flex backdrop-blur-[0.5px] items-center justify-center cursor-grab">
          <button class="min-w-[117px] shadow-md bg-white/25 p-2 rounded-3xl flex items-center gap-4">
            <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
                fill="#FFF" />
            </svg>
            <span class="headingXS text-white">Play</span>
          </button>
        </div>


      </div>


      <div class="w-full space-y-2">
        <div class="flex items-center gap-2 text-white/75">
          <span>{{ props.data.year }}</span>
          <span class="w-1 h-1 bg-white rounded-full"></span>
          <span v-if="props.data.category === 'Movie'">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                fill="#FFF" opacity=".75" />
            </svg>
          </span>

          <span v-if="props.data.category === 'TV Series'">
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                fill="#FFF" opacity=".75" />
            </svg>
          </span>

          <span class="w-1 h-1 bg-white rounded-full"></span>

          <span>{{ props.data.rating }}</span>
        </div>

        <h2 class="heading-XS md:heading-S text-white">
          {{ props.data.title }}
        </h2>
      </div>


    </article>



  </ClientOnly>
</template>
