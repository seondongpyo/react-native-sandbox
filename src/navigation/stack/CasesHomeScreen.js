import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Button,
} from 'react-native';

const CasesHomeScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [cases, setCases] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(`http://192.168.100.4:9090/cases`);
    setCases(response.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Separator = () => <View style={styles.separator} />;

  return (
    <>
      {loading ? null : (
        <View style={styles.container}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              사건 수 : {cases.length} {'\n'}
            </Text>
            <Button title="조회" onPress={() => fetchData()} />
          </View>

          <Separator />

          <ScrollView>
            {cases.map(singleCase => (
              <Pressable
                key={singleCase.caseManagementNumber}
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Detail', { singleCase: singleCase })
                }>
                <Text style={styles.text}>{singleCase.borrowerName}</Text>
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default CasesHomeScreen;
