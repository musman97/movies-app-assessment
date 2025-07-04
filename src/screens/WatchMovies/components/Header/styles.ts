import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Fonts, FontSize, GlobalStyles, responsiveFontSize} from '~/theme';

export const styles = StyleSheet.create({
  container: {
    padding: responsiveHeight(2),
    alignSelf: 'center',
    ...GlobalStyles.containerWidth,
  },
  row: {
    ...GlobalStyles.fRow,
    justifyContent: 'space-between',
  },
  watchText: {
    fontFamily: Fonts.Poppins['500'],
    fontSize: FontSize.lg,
  },
});
