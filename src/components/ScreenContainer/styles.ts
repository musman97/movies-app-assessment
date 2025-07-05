import {StyleSheet} from 'react-native';
import {Colors, GlobalStyles} from '~/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.contrastBg,
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerHPadding: {
    alignSelf: 'center',
    ...GlobalStyles.containerWidth,
  },
});
