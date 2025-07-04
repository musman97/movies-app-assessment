import {JSX} from 'react/jsx-runtime';
import {Text} from 'react-native';
import {ScreenContainer} from '~/components';
import {Fonts} from '~/theme';

export function WatchMoviesScreen(): JSX.Element {
  return (
    <ScreenContainer>
      <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 32}}>
        Hello
      </Text>
    </ScreenContainer>
  );
}
