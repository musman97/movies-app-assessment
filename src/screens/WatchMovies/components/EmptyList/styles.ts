import {StyleSheet} from 'react-native';
import {Fonts, FontSize} from '~/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontFamily: Fonts.Poppins[500],
    fontSize: FontSize.xxl,
    textAlign: 'center',
  },
});
