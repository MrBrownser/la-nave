import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DayRow = ({ title, data }) => (
  <View style={styles.item}>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
      <Ionicons name="person-circle" size={24} color="white" />
      <Text style={styles.assitantsText}>{`${data && data.length} asistentes`}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#3f51b5',
    padding: 20,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  assitantsText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 4,
  }
});

export default DayRow;
