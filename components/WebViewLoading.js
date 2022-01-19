import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import WebView from 'react-native-webview';

export default function WebViewLoading() {
  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="red" size="large" />
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <WebView
          style={{flex: 1}}
          source={{uri: 'https://www.youtube.com/'}}
          javaScriptEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoadEnd={() => setVisible(false)}
        />
      </View>
      {visible ? <ActivityIndicatorElement /> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
