import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoInput from './TodoInput';

const TodoTabScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Here's my Todo list</Text>
      <TodoInput />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});

export default TodoTabScreen;
