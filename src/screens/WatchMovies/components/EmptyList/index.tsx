import {View} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {Text} from '~/components';
import {styles} from './styles';
import {AppStrings} from '~/constants';

export function EmptyList(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{AppStrings.NoUpcomingMovies}</Text>
    </View>
  );
}
