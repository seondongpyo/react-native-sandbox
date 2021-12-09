import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const HomeTabScreen = () => {
  return (
    <View style={styles.view}>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeTabScreen;
