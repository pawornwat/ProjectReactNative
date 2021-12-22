import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import React from 'react';
import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'หน้าหลัก' }} />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'เกี่ยวกับเรา' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
