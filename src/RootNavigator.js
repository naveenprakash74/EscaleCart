import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigatior from './AppNavigatior';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <AppNavigatior></AppNavigatior>
      {/* <Stack.Navigator>
        <Stack.Screen name="Drawer" component={AppNavigatior} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default RootNavigator;
