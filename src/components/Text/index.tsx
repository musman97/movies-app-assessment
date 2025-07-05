import {Text as RNText} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {TextProps} from './types';
import {styles} from './styles';

export function Text({style, ...restProps}: TextProps): JSX.Element {
  return <RNText style={[styles.base, style]} {...restProps} />;
}
