import React, { createRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Loader from './Loader';

const LoginScreen = ({ navigation }) => {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrorText('');

    if (!userId) {
      alert('Please input your id');
      return;
    }
    if (!userPassword) {
      alert('Please input your password');
      return;
    }

    // 로그인 시작
    setLoading(true);
    let requestData = { id: userId, password: userPassword };
    let formBody = [];
    for (let key in requestData) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(requestData[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://192.168.100.4:9090/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        console.log(responseJson);

        if (responseJson.status === 'success') {
          AsyncStorage.setItem('userId', responseJson.data.id);
          console.log(responseJson.data.id);
          navigation.navigate('TabNavigator');
        } else {
          setErrorText(responseJson.message);
          console.log(responseJson.message);
        }
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={id => setUserId(id)}
                placeholder="Enter id"
                placeholderTextColor="lightgray"
                autoCapitalize="none"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current && passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={password => setUserPassword(password)}
                placeholder="Enter password"
                placeholderTextColor="lightgray"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>

            {errorText != '' ? (
              <Text style={styles.errorTextStyle}>{errorText}</Text>
            ) : null}

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    alignContent: 'center',
  },
  sectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
