import {JSX} from 'react/jsx-runtime';
import {MovieCardProps} from './types';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {Text} from '../Text';

export function MovieCard({name, posterUrl}: MovieCardProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: posterUrl}}
        resizeMode="cover"
      />

      {!!name && (
        <Text style={styles.nameText} numberOfLines={2}>
          {name}
        </Text>
      )}
    </View>
  );
}
