import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function AlertExample() {
  const simpleAlertHandler = () => {
    alert('Hello i am Simple Alert');
  };
  const TwoAlertHandler = () => {
    Alert.alert('Hello', 'i am two option alert. Do you want to cancel me?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };
  const ThreeAlertHandler = () => {
    Alert.alert('Hello', 'i am three option alert. Do you want to cancel me?', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandler} />
        <Button title="Alert with two options" onPress={TwoAlertHandler} />
        <Button title="Alert with three options" onPress={ThreeAlertHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    // flex:1
  },
});
