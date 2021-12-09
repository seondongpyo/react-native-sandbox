import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

const HomeStackScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Image
        source={require('../../assets/images/sandbox.png')}
        style={styles.image}
      />
      <Text>This is sandbox!{'\n'}</Text>
      <Button
        title="Go to User Screen"
        onPress={() => navigation.navigate('User')}
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
  image: {
    width: 50,
    height: 50,
  },
});

export default HomeStackScreen;
