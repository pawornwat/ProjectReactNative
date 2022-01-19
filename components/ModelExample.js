import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Modal,
} from 'react-native';
import {useState} from 'react/cjs/react.development';

export default function ModelExample() {
  const simpleAlertHandler = () => {
    alert('Hello i am Simple Alert');
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Modal animationType="slide" transparent={false} visible={showModal}>
          <View style={styles.modal}>
            <Text>Modal is open</Text>
            <Button
              title="Click to Close Modal"
              onPress={() => setShowModal(!showModal)}></Button>
          </View>
        </Modal>
        {/* Updating */}
        <Button
          title="Click to Open modal"
          onPress={() => setShowModal(!showModal)}></Button>
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
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0fff0',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
