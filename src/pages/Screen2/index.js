import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Screen 2</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen2;
