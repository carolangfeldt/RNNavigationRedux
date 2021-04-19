import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signIn } from '../../store/reducers/auth/actions';

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('@storage_Key', value);
  } catch (e) {
    // saving error
    console.log(`error saving value: ${e}`);
  }
};

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleSignIn = (token) => dispatch(signIn(token));

  const handleLogin = () => {
    storeData('token');
    handleSignIn('token');
  };

  return (
    <View>
      <Button onPress={handleLogin} title="login" />
    </View>
  );
};

export default Login;
