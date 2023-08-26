import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Button, Screen} from '../../components';
import {colors} from '../../constants/colors';

import google from '../../assets/images/google.png';
import fullLogo from '../../assets/images/fullLogo.png';
import loginBanner from '../../assets/images/login.png';
import faq from '../../assets/images/faq.png';
import { font } from '../../constants/fonts';

const Login = () => {
  return (
    <Screen>
      <View style={{flex: 1}}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Image
            source={faq}
            style={{height: 32, width: 32, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Image source={fullLogo} style={styles.logo} />
        <Text style={[styles.loginContent,{color: colors.DISABLED, fontSize: 13, transform: [{translateY: -10}]}]}>Betting made social - Betting made simple</Text>
        <Image source={loginBanner} style={styles.loginImage} />
        <Text style={styles.loginContent}>
          Discover a new level of friendship and excitement with our social
          betting app! 🤝 Seamlessly create and share bets among friends,
          turning everyday challenges into thrilling opportunities.{'\n'}{'\n'} Whether
          you're wagering on sports outcomes 🏀, personal achievements 🏆, or
          fun dares 🎉, our platform lets you customize bets and invite friends
          to join in the excitement.
        </Text>
      </View>
      <Button style={{backgroundColor: colors.BRIGHT}}>
        <Image
          source={google}
          style={{height: 22, width: 22, resizeMode: 'contain'}}
        />{' '}{' '}
        Sign in with Google
      </Button>
    </Screen>
  );
};

export default Login;

const styles = StyleSheet.create({
  logo: {
    height: 55,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '16%',
  },
  loginImage: {
    height: 210,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '35%',
  },
  loginContent: {
    fontSize: 14,
    lineHeight: 17,
    fontFamily: font.RobotoLight,
    color: colors.DIM,
    width: 340,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
});
