import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';

const CasesHomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(`http://192.168.100.4:9090/cases`);
      setCases(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? null : (
        <View style={styles.container}>
          <ScrollView>
            {cases.map(singleCase => (
              <Pressable
                key={singleCase.caseManagementNumber}
                style={[styles.button, styles.buttonOpen]}
                onPress={() =>
                  navigation.navigate('Detail', { singleCase: singleCase })
                }>
                <Text style={styles.textStyle}>
                  {singleCase.borrowerName} {singleCase.bankBranchName}
                </Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CasesHomeScreen;
