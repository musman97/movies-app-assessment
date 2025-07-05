import {DimensionValue, StyleSheet} from 'react-native';

export const HorizontalWidthPercentageValue = 90;
export const HorizontalWidthPercentage: DimensionValue = `${HorizontalWidthPercentageValue}%`;

export const GlobalStyles = StyleSheet.create({
  f1: {
    flex: 1,
  },
  fRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emptyStyle: {},
  containerWidth: {
    width: HorizontalWidthPercentage,
  },
});
