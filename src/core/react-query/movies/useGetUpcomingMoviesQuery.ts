import {useInfiniteQuery} from '@tanstack/react-query';
import {ApiService} from '~/core/api';

const BaseQueryKey = 'movies/upcoming';

export const GetUpcomingMoviesQueryKeys = {
  Base: [BaseQueryKey],
};

export const useGetUpcomingMoviesQuery = () =>
  useInfiniteQuery({
    queryKey: GetUpcomingMoviesQueryKeys.Base,
    queryFn: ({pageParam}) => ApiService.Movies.fetchUpcoming(pageParam),
    initialPageParam: 1,

    getNextPageParam: lastPage => {
      const lastFetchedData = lastPage.value;

      return lastFetchedData?.page !== lastFetchedData?.total_pages
        ? (lastFetchedData?.page ?? 0) + 1
        : null;
    },
  });
