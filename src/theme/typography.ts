import {Platform} from 'react-native';
import {responsiveFontSize} from './utils';

export const Fonts = {
  Poppins: Platform.select({
    ios: {
      400: 'Poppins-Regular',
      500: 'Poppins-Medium',
      600: 'Poppins-SemiBold',
    },
    default: {
      400: 'Poppins_400Regular',
      500: 'Poppins_500Medium',
      600: 'Poppins_600SemiBold',
    },
  }),
} as const;

export const FontSize = {
  xs: responsiveFontSize(10), // ~10px
  sm: responsiveFontSize(12), // ~12px
  md: responsiveFontSize(14), // ~14px (base size)
  lg: responsiveFontSize(16), // ~16px
  xl: responsiveFontSize(20), // ~20px
  xxl: responsiveFontSize(24), // ~24px
} as const;
