import {ApiHandler} from '../apiHandler';
import {ApiEndpoints, HttpMethod} from '../constants';
import {GetUpcomingMoviesApiResponse} from './types';

export const MoviesApiService = {
  fetchUpcoming: (page = 1) =>
    ApiHandler.makeApiRequest<GetUpcomingMoviesApiResponse>({
      endpoint: ApiEndpoints.Movies.Upcoming,
      method: HttpMethod.Get,
      query: {page: `${page}`},
    }),
} as const;
