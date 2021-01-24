import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';

import DayList from './components/day-list';

const Tab = createMaterialTopTabNavigator();

const Attendance = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Hoy" component={DayList} />
        <Tab.Screen name="Mañana" component={DayList} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
});

export default Attendance;
