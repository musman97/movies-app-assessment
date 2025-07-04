import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// Based on iPhone 13 scale
const scale = SCREEN_WIDTH / 390;

export function responsiveFontSize(size: number) {
  const newSize = size * scale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
