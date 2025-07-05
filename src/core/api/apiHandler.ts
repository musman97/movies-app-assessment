import {createApiHandler} from './common';
import {BaseUrl, ImageBaseUrl} from './constants';

export const ApiHandler = createApiHandler({
  baseUrl: BaseUrl,
  addAuthHeader: true,
  rejectOnError: true,
  getAuthHeaderValue() {
    return `Bearer ${process.env.EXPO_PUBLIC_TMDB_API_KEY ?? ''}`;
  },
});
