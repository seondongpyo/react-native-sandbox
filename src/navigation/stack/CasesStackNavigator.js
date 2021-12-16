import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CasesHomeScreen from './CasesHomeScreen';
import CasesDetailScreen from './CasesDetailScreen';

const CasesStackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="List" component={CasesHomeScreen} />
      <Stack.Screen name="Detail" component={CasesDetailScreen} />
    </Stack.Navigator>
  );
};

export default CasesStackNavigator;
