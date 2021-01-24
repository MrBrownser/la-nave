import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Attendance from './src/pages/attendance';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Attendance} options={{ title: 'Asistencia entrenos' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
