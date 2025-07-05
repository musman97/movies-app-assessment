import {StyleSheet} from 'react-native';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {Fonts, FontSize, GlobalStyles, responsiveFontSize} from '~/theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(2.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingIndicator: {
    marginBottom: responsiveHeight(2.5),
  },
});
