import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
  } from 'react-navigation-header-buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
  );


export default function HomeScreen(navigation) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
        headerLeft:() =>(<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item 
            title="menu" 
            iconName="menu" 
            onPress={() => alert('เมนูการทำงาน')} />
          </HeaderButtons>
          ),
    //   headerRight: () => (),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Ionicons name="home" size={30} color="skyblue"></Ionicons>
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', {email: 'aaaa@gmail.com'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
