export enum ApiErrorMessage {
  General = 'Something went wrong',
  Network = 'Network error',
  RequestAlreadyExists = 'Request already exists',
  UnableToSendRequest = 'Unable to send request',
  RequestCancelled = 'The api request was cancelled',
  BadRequest = 'The data entered is invalid',
}

export enum HttpMethod {
  Get = 'Get',
  Post = 'Post',
  Put = 'Put',
  Patch = 'Patch',
  Delete = 'Delete',
}

export enum ApiState {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure',
}

export const ApiEndpoints = {
  Movies: {
    Upcoming: '/movie/upcoming',
  },
};

export const BaseUrl = process.env.EXPO_PUBLIC_TMDB_API_BASE_URL ?? '';

export const NetworkErrorMessage = 'Network Error';

export const BaseHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
export const AuthorizationHeaderKey = 'Authorization';

export const AbortReason = 'No auth header value';
export const AbortErrorName = 'AbortError';
