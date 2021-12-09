import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './HomeTabScreen';
import StackNavigator from '../stack/StackNavigator';
import TodoTabScreen from './TodoTabScreen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Todo" component={TodoTabScreen} />
      <Tab.Screen name="Sandbox" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;