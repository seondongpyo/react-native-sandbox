import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTabScreen from './HomeTabScreen';
import StackNavigator from '../stack/StackNavigator';
import TodoTabScreen from './TodoTabScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CasesStackNavigator from '../stack/CasesStackNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  const TabBarIcon = (focused, name) => {
    let iconName;
    let iconSize = focused ? 30 : 20;

    if (name === 'Home') {
      iconName = 'home';
    } else if (name === 'Cases') {
      iconName = 'tasks';
    } else if (name === 'Todo') {
      iconName = 'check-square';
    } else if (name === 'Sandbox') {
      iconName = 'inbox';
    }

    return <Icon name={iconName} size={iconSize} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
        tabBarLabelPosition: 'below-icon',
      })}>
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Cases" component={CasesStackNavigator} />
      <Tab.Screen name="Todo" component={TodoTabScreen} />
      <Tab.Screen name="Sandbox" component={StackNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
