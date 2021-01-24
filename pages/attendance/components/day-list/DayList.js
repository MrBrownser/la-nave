import React from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Item = ({ title, data }) => (
  <View style={styles.item}>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
      <Ionicons name="person-circle" size={24} color="black" />
      <Text style={styles.assitantsText}>{`${data && data.length} asistentes`}</Text>
    </View>
  </View>
);

const DATA = [
  {
    id: 'morning',
    title: 'De 9 a 15h',
    data: ['Dalí', 'Sofi', 'Juanito', 'Sergio', 'Farky', 'Bryan'],
  },
  {
    id: 'afternoon',
    title: 'De 16 a 21h',
    data: ['Bryan', 'Oliboy', 'Cóndor', 'Julián', 'Joselyn'],
  }
];


const DayList = () => {
  const renderItem = ({ item }) => <Item title={item.title} data={item.data}/>;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
  },
  assitantsText: {
    fontSize: 18,
    marginLeft: 4,
  }
});

export default DayList;
