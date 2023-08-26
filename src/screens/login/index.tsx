import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Image,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {Button, Screen} from '../../components';

import google from '../../assets/images/google.png';

const Login = () => {
  return (
    <Screen>
      <Text>Login</Text>
      <View style={{flex: 1}} />
      <Button style={{backgroundColor: colors.BRIGHT}}>
        <Image source={google} style={{height: 22, width: 22, resizeMode: 'contain'}} /> Sign in with Google
      </Button>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({});
