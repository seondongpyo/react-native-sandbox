import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './HomeTabScreen';
import StackNavigator from '../stack/StackNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Sandbox" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
