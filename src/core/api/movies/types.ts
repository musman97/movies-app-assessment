import {UpcomingMovie} from '~/core/models';
import {GeneralApiResponse} from '../types';

export interface GetUpcomingMoviesApiResponse
  extends GeneralApiResponse<UpcomingMovie> {}
