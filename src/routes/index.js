import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from '../pages/Screen1';
import Screen2 from '../pages/Screen2';
import Screen3 from '../pages/Screen3';
import LoadingPage from '../pages/Loading';
import SettingsPage from '../pages/Settings';
import PerfilPage from '../pages/Perfil';
import Header from '../components/Header';

import { restoreToken } from '../store/reducers/auth/actions';

const Stack = createStackNavigator();
const HomeTab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();

const activeTintLabelColor = 'yellow';
const inactiveTintLabelColor = '#808080';

function HomeTabStack() {
  return (
    <HomeTab.Navigator
      initialRouteName="LostPage"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      }}
    >
      <HomeTab.Screen
        name="Page 1"
        component={Screen1}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Page 1
            </Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="Page 2"
        component={Screen2}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Page 2
            </Text>
          ),
        }}
      />
      <HomeTab.Screen
        name="Page 3"
        component={Screen3}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused ? activeTintLabelColor : inactiveTintLabelColor,
              }}
            >
              Page 3
            </Text>
          ),
        }}
      />
    </HomeTab.Navigator>
  );
}

function BottomTabStack() {
  return (
    <BottomTab.Navigator initialRouteName="TabStack">
      <BottomTab.Screen name="TabStack" component={HomeTabStack} />
      <BottomTab.Screen name="SettingsPage" component={SettingsPage} />
    </BottomTab.Navigator>
  );
}

const MainStackNavigator = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.authReducer.isLoading);
  const userToken = useSelector((state) => state.authReducer.userToken);
  const isSignedIn = useSelector((state) => state.authReducer.isSignedIn);
  // const isSignedIn = useSelector((state) => state.authReducer.isSignedIn);
  const getToken = (token) => dispatch(restoreToken(token));

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        getToken(jsonValue);
      } catch (e) {
        console.log(e);
      }
    };
    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          header: () => <Header />,
        }}
        mode="modal"
      >
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingPage} />
        ) : (
          <>
            {userToken != null ? (
              <>
                <Stack.Screen
                  name="BottomTabStack"
                  component={BottomTabStack}
                />
                <Stack.Screen name="PerfilPage" component={PerfilPage} />
              </>
            ) : (
              <Stack.Screen
                name="Login"
                component={LoginPage}
                options={{
                  // When logging out, a pop animation feels intuitive
                  animationTypeForReplace: isSignedIn ? 'pop' : 'push',
                }}
              />
            )}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
