import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CasesTabScreen = () => {
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
              <View>
                <Text>
                  {singleCase.borrowerName} {singleCase.bankBranchName}
                </Text>
              </View>
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
});

export default CasesTabScreen;
