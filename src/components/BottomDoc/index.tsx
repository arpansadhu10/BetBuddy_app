import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import home from '../../assets/images/home.png';
import explore from '../../assets/images/explore.png';
import create from '../../assets/images/create.png';
import transfer from '../../assets/images/rupees.png';
import profile from '../../assets/images/profile.png';

import {colors} from '../../constants/colors';

interface BottomDocProps {
  active: 'Home' | 'Explore' | 'Create' | 'Transfer' | 'Profile';
}
const options: {icon: ImageSourcePropType; name: string}[] = [
  {icon: home, name: 'Home'},
  {icon: explore, name: 'Explore'},
  {icon: create, name: 'Create'},
  {icon: transfer, name: 'Transfer'},
  {icon: profile, name: 'Profile'},
];

const windowWidth = Dimensions.get('window').width;

export default function BottomDoc({active = 'Home'}: BottomDocProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option.name}
          style={styles.button}
          onPress={() => {
            //@ts-ignore
            navigation.navigate(option.name);
          }}>
          <Image
            source={option.icon}
            style={[
              styles.icon,
              {
                height: option.name === 'Create' ? 38 : 24,
                width: option.name === 'Create' ? 38 : 24,
                opacity: option.name === active ? 1 : 0.4,
              },
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: windowWidth,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.BLACK,
    position: 'absolute',
    bottom: 0,
  },
  button: {
    padding: 12,
    // backgroundColor: '#faf'
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
});
