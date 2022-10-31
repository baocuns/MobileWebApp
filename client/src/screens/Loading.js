import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../assets/audio/19080-travel-the-world.json')}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  backgroudColor: 'rgba(0, 0, 0, 0.3) ',
});

export default Loading;
