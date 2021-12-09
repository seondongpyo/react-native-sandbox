import React, { useState } from 'react';
import {
  TouchableOpacity,
  TextInput,
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native';

const TodoInput = () => {
  const [todo, setTodo] = useState('');
  const inputTodo = event => setTodo(event);

  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo === '') {
      return;
    }
    setTodos([todo, ...todos]);
    setTodo('');
  };

  const Separator = () => <View style={styles.separator} />;

  return (
    <View>
      <View style={styles.view}>
        <TextInput
          value={todo}
          onChangeText={inputTodo}
          placeholder="Input todo..."
          style={styles.input}
        />
        <TouchableOpacity title="add" onPress={addTodo} style={styles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <Separator />

      <View style={styles.todos}>
        {todos.map((item, index) => (
          <View key={index}>
            <Text>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    backgroundColor: 'skyblue',
    height: 40,
    padding: 10,
  },
  todos: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoInput;
