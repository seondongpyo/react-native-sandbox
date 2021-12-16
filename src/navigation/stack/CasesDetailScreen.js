import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CasesDetailScreen = ({ route, navigation }) => {
  const { singleCase } = route.params;
  return (
    <View style={styles.view}>
      <Text>이름 : {singleCase.borrowerName}</Text>
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

export default CasesDetailScreen;
