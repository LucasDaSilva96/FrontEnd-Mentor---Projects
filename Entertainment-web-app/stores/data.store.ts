import type { DataItem } from '~/types/data';

export const useDataStore = defineStore('data', () => {
  // Define the reactive state
  const allData = ref<DataItem[]>([]);
  const movies = ref<DataItem[]>([]);
  const series = ref<DataItem[]>([]);
  const bookmarks = ref<DataItem[]>([]);
  const isTrending = ref<DataItem[]>([]);
  const notTrending = ref<DataItem[]>([]);

  // Define the methods to update the state
  function setData(data: DataItem[]) {
    allData.value = data;

    // Create the image URL
    allData.value.forEach((item) => {
      item.thumbnail_large = createImageUrl(item.thumbnail_large);
      item.thumbnail_small = createImageUrl(item.thumbnail_small);
      item.thumbnail_medium = createImageUrl(item.thumbnail_medium);
    });

    movies.value = data.filter((item) => item.category === 'Movie');
    series.value = data.filter((item) => item.category === 'TV Series');
    bookmarks.value = data.filter((item) => item.isBookmarked);
    isTrending.value = data.filter((item) => item.isTrending);
    notTrending.value = data.filter((item) => !item.isTrending);
  }

  function toggleBookmark(id: string) {
    const item = allData.value.find((item) => item.id === id);
    const indexOfItem = allData.value.findIndex((item) => item.id === id);
    if (item && indexOfItem !== -1) {
      item.isBookmarked = !item.isBookmarked;
      bookmarks.value = allData.value.filter((item) => item.isBookmarked);
      allData.value[indexOfItem] = item;
    }
  }

  // Define the computed properties
  const getDataAllData = computed(() => allData.value);
  const getMovies = computed(() => movies.value);
  const getSeries = computed(() => series.value);
  const getBookmarks = computed(() => bookmarks.value);
  const getIsTrending = computed(() => isTrending.value);
  const getNotTrending = computed(() => notTrending.value);

  return {
    getDataAllData,
    getMovies,
    getSeries,
    getBookmarks,
    setData,
    getIsTrending,
    getNotTrending,
    toggleBookmark,
  };
});
