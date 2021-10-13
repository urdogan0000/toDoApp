import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';

function bottomPart(props) {
  const {bottom,inputStyle,buttonText,buttonStyle,focusedbuttonStyle}=styles
  return (
    <View style={bottom}>
      <TextInput
        style={inputStyle}
        placeholder="Yapılacak..."
        value={props.newText}
        onChangeText={text=>props.setnewText(text)}
      />
      <View style={ buttonStyle }>
        <TouchableWithoutFeedback onPress={props.pushJob(props.newText)} >
          <Text style={buttonText}>Kaydet</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: '#37474F',
    marginBottom: 10,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: '#808080',
  },
  buttonStyle: {
    backgroundColor: '#808080',
    borderRadius: 20,
    margin: 10,
  },
  focusedbuttonStyle: {
    backgroundColor: 'orange',
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  taskText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
});

export default bottomPart