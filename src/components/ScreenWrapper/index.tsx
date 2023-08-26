import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: any;
  statusBarColor?: string;
  [x: string]: any;
}

export default function Screen({
  children,
  style = {},
  statusBarColor = colors.BACKGROUND,
  ...rest
}: ScreenWrapperProps) {
  return (
    <SafeAreaView style={[styles.container, style]} {...{rest}}>
      <StatusBar backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.BACKGROUND,
    paddingHorizontal: 16,
    paddingVertical: 24,
    paddingBottom: 36,
  },
});
