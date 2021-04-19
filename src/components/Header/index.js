import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <Icon name="menu-outline" size={24} />
        <Text style={styles.text}>HappyPet</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationsPage')}
          style={styles.icon}
        >
          <Icon name="notifications-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PerfilPage')}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100 %',
    flexDirection: 'row',
    backgroundColor: '#633689',
    justifyContent: 'space-between',
    padding: 5,
  },
  image: {
    width: 35,
    height: 35,
    borderColor: 'yellow',
    borderWidth: 1,
    borderRadius: 50,
  },
  content: {
    flexDirection: 'row',
  },
  text: {
    paddingStart: 10,
    fontSize: 20,
    color: 'yellow',
  },
  headerLeft: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  headerRight: {
    flexDirection: 'row',
    paddingEnd: 10,
    alignSelf: 'center',
  },
  icon: {
    paddingEnd: 10,
    alignSelf: 'center',
  },
  imageContainer: {},
});

// headerStyle: { backgroundColor: '#633689' },
// headerTintColor: '#fff',
// headerTitleStyle: { fontWeight: 'bold' },
// headerTitle: 'CadePet',
// headerRight: () => (
//   <Button onPress={() => setSignOut()} title="Sair" color="#633689" />
// ),
