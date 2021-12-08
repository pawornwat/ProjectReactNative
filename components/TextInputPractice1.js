import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, StyleSheet, Button} from 'react-native';

const TextInputPractice1 = () => {
  const [name, onChangeName] = useState('');
  const [email, onChangeEmail] = useState('');
  const onPressAlert = () => {
    if (email.trim() && name.trim()) {
      alert('Success');
      return;
    } else {
      if (!name.trim()) {
        alert('Plase Enter Name');
        return;
      }
      if (!email.trim()) {
        alert('Please Enter Email');
        return;
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeName}
        value={name}
        placeholder="Enter Name"></TextInput>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Enter Email"></TextInput>
      <Button onPress={onPressAlert} title="Click Me" color="#841558"></Button>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});

export default TextInputPractice1;
