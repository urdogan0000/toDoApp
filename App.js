import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Alert} from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/ToDoList/ToDoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [newTitle, setNewTitle] = useState('');

  useEffect(() => {
    getUncompletedTodos(todos);
  }, [todos]);

  const addNewTodo = title => {
    if (title === '') {
      Alert.alert('Please enter a task!');
    } 
     else {
      setTodos([...todos, {id: Date.now(), title: title, completed: false}]);
      setNewTitle('');
    }
  };

  const longPressHandler = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleHandler = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : {...todo},
      ),
    );
  };

  const getUncompletedTodos = tasks => {
    const unCompletedTodos = tasks.filter(task => task.completed === false);
    setCount(unCompletedTodos.length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header count={count} />
      <TodoList
        todos={todos}
        toggleHandler={toggleHandler}
        longPressHandler={longPressHandler}
      />
      <Footer
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        addNewTodo={addNewTodo}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-between',
  },
});

export default App;