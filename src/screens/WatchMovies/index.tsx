import {JSX} from 'react/jsx-runtime';
import {MovieCard, ScreenContainer} from '~/components';
import {UpcomingMovie, useGetUpcomingMoviesQuery} from '~/core';
import {Header, ListFooter} from './components';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useCallback, useMemo} from 'react';
import {makePosterUrl} from '~/utils';
import {styles} from './styles';

const Separator = () => <View style={styles.separator} />;

export function WatchMoviesScreen(): JSX.Element {
  const {data} = useGetUpcomingMoviesQuery();
  const moviesData = useMemo(
    () => data?.pages?.flatMap(page => page.value?.results ?? []) ?? [],
    [data],
  );

  const keyExtractor = useCallback((data: UpcomingMovie) => `${data.id}`, []);

  const renderMovie: ListRenderItem<UpcomingMovie> = ({item: movie}) => (
    <MovieCard
      name={movie.original_title ?? ''}
      posterUrl={makePosterUrl(movie.poster_path ?? '')}
    />
  );

  return (
    <ScreenContainer>
      <Header />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={moviesData}
        keyExtractor={keyExtractor}
        renderItem={renderMovie}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooter}
      />
    </ScreenContainer>
  );
}
