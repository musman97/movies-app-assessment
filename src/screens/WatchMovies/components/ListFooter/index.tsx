import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {BaseHeader, IconNames, Icons, Text} from '~/components';
import {AppStrings} from '~/constants';
import {Colors, FontSize} from '~/theme';
import {styles} from './styles';
import {ListFooterProps} from './types';

export function ListFooter({loadingMore}: ListFooterProps): JSX.Element {
  return (
    <View style={styles.container}>
      {loadingMore && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color={Colors.black}
        />
      )}
    </View>
  );
}
