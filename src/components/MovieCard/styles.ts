import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts, responsiveFontSize} from '~/theme';

const borderRadiusStyle = {
  borderRadius: responsiveWidth(50) / 16,
} satisfies ViewStyle;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(25),
    alignItems: 'center',
    ...borderRadiusStyle,
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    ...borderRadiusStyle,
  },
  nameText: {
    width: '90%',
    position: 'absolute',
    bottom: responsiveHeight(2),

    fontFamily: Fonts.Poppins[500],
    fontSize: responsiveFontSize(18),

    color: Colors.white,
  },
});
