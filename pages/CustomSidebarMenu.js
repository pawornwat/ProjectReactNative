import {View, Text, Linking, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from '../components/styles';

export default function CustomSidebarMenu(props) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Image
    source={require('../assets/react_logo.png')}
    style = {styles.sideMenuProfileIcon}
    />
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
        label="Visit Us"
        onPress={()=> Linking.openURL('https://it.tni.ac.th')}
        />
        <View style={styles.customItem}>
            <Text onPress={()=> Linking.openURL('https://reg.tni.ac.th')}>
                Rate Us
            </Text>
        </View>
    </DrawerContentScrollView>
    </SafeAreaView>
  );
};
