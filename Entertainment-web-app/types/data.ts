export type DataItem = {
  id: string;
  title: string;
  year: number;
  category: 'Movie' | 'TV Series';
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
  thumbnail_small: string;
  thumbnail_medium: string;
  thumbnail_large: string;
};
