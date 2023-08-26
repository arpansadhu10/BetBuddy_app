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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from './src/constants/colors';
import {Create, Explore, Home, Login, Profile, Transfer} from './src/screens';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.sectionContainer}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Explore"
            component={Explore}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Create"
            component={Create}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{headerShown: false, gestureEnabled: false}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.BACKGROUND,
    paddingTop: 36, //this is to adjust the padding done by react native navigation
  },
});

export default App;
