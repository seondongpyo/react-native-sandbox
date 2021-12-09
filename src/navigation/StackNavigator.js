import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeStackScreen from './HomeStackScreen';
import UserStackScreen from './UserStackScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <Stack.Screen name="Home" component={HomeStackScreen} />
      <Stack.Screen name="User" component={UserStackScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
