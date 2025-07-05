import {ApiHandler} from '../apiHandler';
import {ApiEndpoints, HttpMethod} from '../constants';
import {GetUpcomingMoviesApiResponse} from './types';

const defaultQueryParams = {language: 'en-US'};

export const MoviesApiService = {
  fetchUpcoming: (page = 1) =>
    ApiHandler.makeApiRequest<GetUpcomingMoviesApiResponse>({
      endpoint: ApiEndpoints.Movies.Upcoming,
      method: HttpMethod.Get,
      query: {...defaultQueryParams, page: `${page}`},
    }),
} as const;
