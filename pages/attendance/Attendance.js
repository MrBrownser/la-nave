import React from 'react';
import { Button,
  View, StyleSheet, Text } from 'react-native';

const Attendance = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Attendance Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Attendance;
