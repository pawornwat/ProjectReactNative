import React from 'react'
import { Button, SafeAreaView, View ,StyleSheet,Text} from 'react-native';


const ButtonExample = () => {
    const onPressAlert = () =>{
        alert("Hello")
    }
  return (
      <SafeAreaView style={{flex:1}}>
          <View style={styles.container}>
            <Text>Button</Text>
            <Button
            onPress={onPressAlert}
            title="Click Me"
            color="#841558">

            </Button>
          </View>
      </SafeAreaView>

  )
};
export default ButtonExample
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });