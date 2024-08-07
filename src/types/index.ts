import React from 'react';

interface Image {
  id: string;
  url: string;
}

export interface CatImgProps {
  src: string,
  alt: string,
  favId: number,
  catId: string
}

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: object;
}

export interface CatsState {
  data: Cat[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface FavoriteItem {
  id: number;
  image_id: string;
  sub_id: string | null;
  created_at: string;
  image: Image;
}

export interface FavouriteCat {
  id: number;
  image_id: string;
  sub_id: string;
  created_at: string;
  image: Image;
}

export interface FavouriteState {
  data: FavouriteCat[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

export interface FavoriteBtnProps {
  catId: string;
  subId: string;
  favId?: number;
}

export interface PaginationCompProps {
  currentPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export interface Weight {
  imperial: string;
  metric: string;
}

export interface CatBreed {
  weight: Weight;
  id: string;
  name: string;
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  description: string;
  life_span: string;
  indoor: number;
  lap?: number;
  alt_names?: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  wikipedia_url?: string;
  hypoallergenic: number;
  reference_image_id: string;
}

export interface BreedsState {
  data: CatBreed[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface BreedDetails {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface BreedDetailsState {
  data: BreedDetails[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}
