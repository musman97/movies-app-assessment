import {MoviesApiService} from './movies';

export const ApiService = {
  Movies: MoviesApiService,
} as const;
