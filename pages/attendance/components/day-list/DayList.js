import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
} from 'react-native';
import DayRow from '../day-row';

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
  const renderItem = ({ item }) => <DayRow title={item.title} data={item.data}/>;

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
});

export default DayList;
