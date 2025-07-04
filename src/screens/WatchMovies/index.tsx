import {JSX} from 'react/jsx-runtime';
import {ScreenContainer} from '~/components';
import {Header} from './components';

export function WatchMoviesScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <Header />
    </ScreenContainer>
  );
}
