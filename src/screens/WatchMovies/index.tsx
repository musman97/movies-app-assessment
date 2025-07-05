import {JSX} from 'react/jsx-runtime';
import {MovieCard, ScreenContainer} from '~/components';
import {UpcomingMovie, useGetUpcomingMoviesQuery} from '~/core';
import {EmptyList, Header, ListFooter} from './components';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useCallback, useMemo} from 'react';
import {makePosterUrl} from '~/utils';
import {styles} from './styles';

const Separator = () => <View style={styles.separator} />;

export function WatchMoviesScreen(): JSX.Element {
  const {data, isLoading, isFetching} = useGetUpcomingMoviesQuery();
  const moviesData = useMemo(
    () => data?.pages?.flatMap(page => page.value?.results ?? []) ?? [],
    [data],
  );
  const noData = moviesData.length === 0;

  const isFetchingMovies = isLoading || isFetching;

  const keyExtractor = useCallback((data: UpcomingMovie) => `${data.id}`, []);

  const renderMovie: ListRenderItem<UpcomingMovie> = ({item: movie}) => (
    <MovieCard
      name={movie.original_title ?? ''}
      posterUrl={makePosterUrl(movie.poster_path ?? '')}
    />
  );
  const renderContent = () => {
    if (noData) {
      return <EmptyList />;
    } else {
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={moviesData}
          keyExtractor={keyExtractor}
          renderItem={renderMovie}
          ItemSeparatorComponent={Separator}
          ListFooterComponent={ListFooter}
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
