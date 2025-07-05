import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {JSX} from 'react/jsx-runtime';
import {styles} from './styles';
import {ScreenContainerProps} from './types';

export function ScreenContainer({
  children,
  addHPadding = true,
}: ScreenContainerProps): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.contentContainer,
          addHPadding && styles.contentContainerHPadding,
        ]}>
        {children}
      </View>
    </SafeAreaView>
  );
}
