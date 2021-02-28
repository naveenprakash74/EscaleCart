import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home/HomeScreen';
import {homeIcon, profileIcon} from './images/index';
import ProfileScreen from './screens/profile/ProfileScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, ...restProps}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = homeIcon;
            } else if (route.name === 'Profile') {
              iconName = profileIcon;
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{height: 16, width: 16}} />;
          },
        };
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export class AppNavigatior extends Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
      </Drawer.Navigator>
    );
  }
}

export default AppNavigatior;
