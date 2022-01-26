import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View,TouchableOpacity,Image } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('./assets/drawerWhite.png')}
          style={{width: 25,height:25,marginLeft:5}}></Image>
      </TouchableOpacity>
    </View>
  );
};

function FirstScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        //Set Header text color
        headerTintColor: '#fff',
        //Set Header text style
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft:()=> <NavigationDrawerStructure navigationProps={navigation}/>
      }}>
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{title: 'First Page'}}
      />
    </Stack.Navigator>
  );
}
function SecondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        //Set Header Color
        headerStyle: {backgroundColor: '#5f9ea0'},
        //Set Header text color
        headerTintColor: '#fff',
        //Set Header text style
        headerTitleStyle: {fontWeight: 'bold'},
        headerLeft:()=> <NavigationDrawerStructure navigationProps={navigation}/>
      }}>
      <Stack.Screen
      name="SecondPage"
      component={SecondPage}
      options={{title: 'Second Page'}}
    />
    <Stack.Screen
      name="ThirdPage"
      component={ThirdPage}
      options={{title: 'Third Page'}}
    />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="FirstPage" component={FirstScreenStack} />
        <Drawer.Screen name="SecondPage" component={SecondScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
