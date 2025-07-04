import {JSX} from 'react/jsx-runtime';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {PropsWithChildren} from 'react';

export function ScreenContainer({children}: PropsWithChildren): JSX.Element {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
