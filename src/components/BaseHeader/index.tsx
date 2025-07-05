import {View} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BaseHeaderProps} from './types';
import {styles} from './styles';

export function BaseHeader({children}: BaseHeaderProps): JSX.Element {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {top: -top, paddingTop: top}]}>
      {children}
    </View>
  );
}
