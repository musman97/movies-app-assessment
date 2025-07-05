import {JSX} from 'react/jsx-runtime';
import {MovieCard, ScreenContainer} from '~/components';
import {UpcomingMovie, useGetUpcomingMoviesQuery} from '~/core';
import {EmptyList, Header, ListFooter, ListLoader} from './components';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useCallback, useMemo} from 'react';
import {makePosterUrl} from '~/utils';
import {styles} from './styles';

const Separator = () => <View style={styles.separator} />;

export function WatchMoviesScreen(): JSX.Element {
  const {data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage} =
    useGetUpcomingMoviesQuery();
  const moviesData = useMemo(
    () => data?.pages?.flatMap(page => page.value?.results ?? []) ?? [],
    [data],
  );
  const noData = moviesData.length === 0;

  const isFetchingMovies = isFetching;

  const keyExtractor = useCallback((data: UpcomingMovie) => `${data.id}`, []);

  const onEndReached = () => {
    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  };

  const renderMovie: ListRenderItem<UpcomingMovie> = ({item: movie}) => (
    <MovieCard
      name={movie.original_title ?? ''}
      posterUrl={makePosterUrl(movie.poster_path ?? '')}
    />
  );
  const renderContent = () => {
    if (isFetchingMovies && noData) {
      return <ListLoader />;
    } else if (noData) {
      return <EmptyList />;
    } else {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={moviesData}
          keyExtractor={keyExtractor}
          renderItem={renderMovie}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={() => (
            <ListFooter loadingMore={isFetchingNextPage} />
          )}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
        />
      );
    }
  };

  return (
    <ScreenContainer>
      <Header />

      {renderContent()}
    </ScreenContainer>
  );
}
