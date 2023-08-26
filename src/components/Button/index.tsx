import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Children} from 'react';
import {colors} from '../../constants/colors';
import { font } from '../../constants/fonts';

interface ButtonProps {
  onPress?: (e?: any) => void;
  style?: any;
  textStyle?: any;
  enabledColor?: string;
  disabledColor?: string;
  disabled?: boolean;
  children?: React.ReactNode | string;
  [x: string]: any;
}

export default function Button({
  onPress = () => {},
  style = {},
  textStyle = {},
  enabledColor = colors.ACCENT,
  disabledColor = colors.DISABLED,
  disabled = false,
  children = 'Button',
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        {backgroundColor: !disabled ? enabledColor : disabledColor},
        style,
      ]}
      {...{onPress, disabled, rest}}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: font.RobotoBold,
    color: colors.BLACK,
    height: '100%',
    width: '100%',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
});
