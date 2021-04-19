import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loading = () => {
  return (
    <View>
      <AnimatedLoader
        visible
        overlayColor="rgba(255,255,255,1)"
        source={require('../../assets/lotties/loader.json')}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Loading...</Text>
      </AnimatedLoader>
    </View>
  );
};

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100,
  },
});

export default Loading;
