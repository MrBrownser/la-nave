import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DayList from './components/day-list';

const Tab = createMaterialTopTabNavigator();

const Attendance = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Hoy" component={DayList} />
        <Tab.Screen name="Mañana" component={DayList} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default Attendance;
