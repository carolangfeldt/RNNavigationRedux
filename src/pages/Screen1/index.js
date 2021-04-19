import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Screen 1</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen1;
