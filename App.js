import React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {View, TouchableOpacity, Image,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Page' }} />
    </Stack.Navigator>
  );
}
function SettingStackScreen() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: 'red' },
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Setting" component={SettingScreen} options={{ title: 'Setting Page' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile Page' }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let image;
            if (route.name === 'Home') {
              image = focused ? require('./assets/logo1.png') : require('./assets/logo2.png');
            }else if(route.name === 'Setting'){
              image = focused ? require('./assets/logo1.png') : require('./assets/logo3.png');
            }
            return <Image source={image} style={{width:25,height:25,marginLeft:5}}/>;
          },
        })}
        >

        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Setting" component={SettingStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
