import React from 'react';
import {Image, SafeAreaView, TextInput, View,StyleSheet} from 'react-native';

const ImageWithTextInput = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={require('../image/input_username.png')}
            style={styles.imageStyle}></Image>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Name Here"
            underlineColorAndroid="transparent"></TextInput>
          <Image
            source={require('../image/input_phone.png')}
            style={styles.imageStyle}></Image>
          <TextInput
            style={{flex: 1}}
            placeholder="Enter Your Phone Here"
            underlineColorAndroid="transparent"></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  }
});

export default ImageWithTextInput
