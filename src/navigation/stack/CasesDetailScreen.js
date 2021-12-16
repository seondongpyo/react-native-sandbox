import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CasesDetailScreen = ({ route, navigation }) => {
  const { singleCase } = route.params;
  console.log(singleCase);
  return (
    <View style={styles.view}>
      <Text>이름 : {singleCase.borrowerName}</Text>
      <Text>지점명 : {singleCase.bankBranchName}</Text>
      <Text>은행고유번호 : {singleCase.bankId}</Text>
      <Text>채권최고액 : {singleCase.bondMaxAmount}</Text>
      <Text>대출실행일 : {singleCase.loanExecutionDate}</Text>
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
