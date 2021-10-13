import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    margin: 5,
    backgroundColor: 'green',
  },
  text: {
    margin: 5,
    padding: 10,
    color: 'white',
    fontSize: 30,
  },
  completed_text: {
    color: 'white',
    padding: 15,
    fontSize: 30,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
    backgroundColor: '#37474F',
    borderRadius: 20,
  },
});