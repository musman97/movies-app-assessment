import {TouchableOpacity, View} from 'react-native';
import {JSX} from 'react/jsx-runtime';
import {BaseHeader, IconNames, Icons, Text} from '~/components';
import {AppStrings} from '~/constants';
import {Colors, FontSize} from '~/theme';
import {styles} from './styles';
import {HeaderProps} from './types';

export function Header({onSearchPress}: HeaderProps): JSX.Element {
  return (
    <BaseHeader>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.watchText}>{AppStrings.Watch}</Text>

          <TouchableOpacity onPress={onSearchPress}>
            <Icons.AntDesign
              name={IconNames.Search1}
              color={Colors.black}
              size={FontSize.md}
            />
          </TouchableOpacity>
        </View>
      </View>
    </BaseHeader>
  );
}
