import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {defaultScreenOptions} from './config';
import {RouteName} from './routes';
import {WatchMoviesScreen} from '~/screens';
import {RootStackParamList} from './types';
import {GlobalSelectors, useGlobalStore} from '~/state';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const renderScreens = React.useCallback(() => {
    return (
      <RootStack.Screen
        name={RouteName.WatchMovies}
        component={WatchMoviesScreen}
      />
    );
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={defaultScreenOptions}>
        {renderScreens()}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
