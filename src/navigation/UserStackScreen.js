import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const UserStackScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text>User Screen {'\n'}</Text>
      <Button
        title="Back to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
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

export default UserStackScreen;
