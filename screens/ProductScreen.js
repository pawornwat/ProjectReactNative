import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from 'react-navigation-header-buttons';

const IoniconsHeaderButton = props => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="#f4511e" />
      <Text>หน้าหลัก</Text>
      <Button
        title="Go to Product"
        onPress={() =>
          navigation.navigate('Product', {email: 'ta.pawornwat_st@tni.ac.th'})
        }  
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 