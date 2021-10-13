import React,{useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './Footer.styles';

const Footer = ({newTitle, setNewTitle, addNewTodo}) => {
  const [focused,setFocused]=useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTitle}
        placeholder="Yapılacak"
        placeholderTextColor="#86888A"
        onChangeText={text => setNewTitle(text)}
        onFocus={()=>{setFocused(!focused)}}
      />
      <TouchableOpacity
        style={focused?styles.focusedbutton:styles.button}
        onPress={() => addNewTodo(newTitle)}>
        <Text style={styles.button_text}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;