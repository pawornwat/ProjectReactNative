import React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';
import {View, TouchableOpacity, Image,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ProductScreen from './screens/ProductScreen';
import MenuScreen from './screens/MenuScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: {backgroundColor: '#FACF5A'},
        headerTintColor: '#FFFF',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'หน้าหลัก'}}
      />
        <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{title: 'สินค้า'}}
      />
    </Stack.Navigator>
  )
}
function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FACF5A' },
        headerTintColor: '#233142',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Product" component={ProductScreen} options={{ title: 'สินค้า' }} />
       <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        drawerPosition="left"
        drawerContent={(props)=><MenuScreen {...props}/>}
      >
        <Drawer.Screen name='Home' component ={HomeStack}/>
        <Drawer.Screen name='Product' component ={ProductStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
