import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {colors} from './src/constants/colors';
import {Login} from './src/screens';

function App(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.BACKGROUND,
  },
});

export default App;
