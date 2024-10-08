const BASE_URL = import.meta.env.VITE_DIRECTUS_URL as string;

export const createImageUrl = (imageId: string) =>
  `${BASE_URL}/assets/${imageId}`;
