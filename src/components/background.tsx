import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import icons from '../images/common';

interface MyProps {}

const BackgroundFirstScreen = (props: React.PropsWithChildren<MyProps>) => (
  <View style={styles.container}>
    <ImageBackground
      source={icons.Digio}
      resizeMode="contain"
      style={styles.image}>
      {props.children}
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf2ea',
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BackgroundFirstScreen;
