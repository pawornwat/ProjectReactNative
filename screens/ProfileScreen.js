import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { styles } from '../components/styles';

export default function ProfileScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 15}}>
        <View style={styles.container}>
          <Text style={styles.textTopStyle}>You are on Profile Screen</Text>
          <Text style={{bottom: 15, position: 'absolute'}}>
            <Text style={styles.textBottomStyle}>www.tni.ac.th</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

