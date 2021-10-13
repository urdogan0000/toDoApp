import React from 'react';
import {Text, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

const Task = props => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.activeJob(props.currentTask.item.id);
        }}
        onLongPress={() => {
          if (props.currentTask.item.isComplated) {
            props.deleteJob(props.currentTask.index);
          }
        }}>
        <Text
          style={
            props.currentTask.item.isComplated
              ? styles.doneText
              : styles.notDoneText
          }>
          {props.currentTask.item.jobName}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    borderRadius: 20,
    margin: 5,
    backgroundColor: 'green',
  },
  doneText: {
    color: 'white',
    margin: 5,
    padding: 10,
    fontSize: 30,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    backgroundColor: '#37474F',
    borderRadius: 20,
  },
  notDoneText: {
    margin: 5,
    padding: 10,
    color: 'white',
    fontSize: 30,
  },
});
