import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from '../components/styles';

export default function SettingScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>Setting Screen</Text>
          <Button
            title="Go to Home Tab"
            onPress={() => navigation.navigate('Home')}
          />
          <Button title="Open News Screen" />
          <Button
            title="Go to Profile Screen"
            onPress={() => navigation.navigate('Profile')}
          />
          <Text style={{bottom: 15, position: 'absolute'}}>
            <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

