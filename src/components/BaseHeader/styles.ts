import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Colors} from '~/theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Colors.secondary,
    width: responsiveWidth(100),
  },
});
