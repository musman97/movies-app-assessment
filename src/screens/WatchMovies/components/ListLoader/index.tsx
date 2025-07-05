import {ActivityIndicator, View} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {styles} from './styles';
import {Colors} from '~/theme';

export function ListLoader(): JSX.Element {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color={Colors.black} />
    </View>
  );
}
