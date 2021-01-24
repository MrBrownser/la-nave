import React, { useState, useRef } from 'react';
import {
  Animated,
  Button,
  Easing,
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../../../constants';

const DayRow = ({ title, participants }) => {
  const [open, setOpen] = useState(false);
  const animatedController = useRef(new Animated.Value(0)).current;

  const MAX_BODY_HEIGHT = participants.length * 15 + 30;

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, MAX_BODY_HEIGHT],
  });

  const arrowAngle = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });

  const toggleListItem = () => {
    if (open) {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 0,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 300,
        toValue: 1,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
    setOpen(!open);
  };

  const onPressEnroll = () => {
    console.log("onPressEnroll!");
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.item}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <Ionicons name="person-circle" size={24} color="white" />
            <Text style={styles.assitantsText}>{`${participants && participants.length} asistentes`}</Text>
          </View>
          <Animated.View style={{ transform: [{ rotateZ: arrowAngle }] }}>
            <Ionicons name="chevron-down" size={24} color="white" />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ paddingLeft: 15 }}>
            { participants.map((participant, idx) => <Text key={`${participant}-${idx}`}>{participant}</Text>) }
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
              style={{ padding: 15 }}
              onPress={onPressEnroll}
              title="Voy a ir!"
              color={colors.MAIN}
            />
          </View>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: colors.MAIN,
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
  },
  bodyBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  }
});

export default DayRow;
