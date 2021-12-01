import React, {Component} from 'react';
// import {View , Text} from 'react-native';
import { useState,useMemo } from 'react';
// import { SafeAreaView,Text,View,Button } from 'react-native';
import { StyleSheet,Text,View,Button,ScrollView,SafeAreaView,RefreshControl,TextInput } from 'react-native';




const App =()=>{
  const [inputValue,setInputValue] = useState('')
  const checkNumber = () =>{
    if(isNaN(inputValue)){
      alert("It is not a Number")
    }else{
      alert("It is a Number")
    }
  }

  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <TextInput 
          placeholder = "Enter Text"
          style = {styles.textInput}
          onChangeText = {(inputValue) => {setInputValue(inputValue)}}
        >

        </TextInput>
        <Button 
          title = "Check Value Is Number or Not"
          onPress = {checkNumber}
        > 

        </Button>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  textInput:{
    textAlign: 'center',
    height: 50,
    width:'70%',
    marginBottom: 10
  },
  
});
// const MyCustomTextWith = (props) => {
//   // const {fname,lname} = props;
//   return(
//     <View style = {{alignItems: 'center'}}>
//       <Text>
//         Your First Name is {props.fname}! and Last name is {props.lname}
//       </Text>
//     </View>
//   );
// }


// const wait = (timeout)=>{
//   return new Promise(resolve => setTimeout(resolve,timeout));
// }

// const UselessTextInput = () =>{
//   const [text,onChangeText] = useState("Useless Text")
//   const [number,onChangeNumber] = useState(null);

//   return(
//     <SafeAreaView style={styles.container}> 
//       <TextInput
//         style = {styles.input}
//         onChangeText = {onChangeText}
//         value = {text}
//       >
//       </TextInput>
//       <TextInput
//         style = {styles.input}
//         onChangeText = {(number)=>onChangeNumber(number)}
//         value = {number}
//         placeholder = "number"
//         keyboardType = "numeric"
//       >
//       </TextInput>
//       <Text>{text}</Text>
//       <Text>{number}</Text>
//     </SafeAreaView>
//   );
// }

// const App = () => {
//   const [refreshing,setRefreshing] = React.useState(false);
//   const onRefresh = React.useCallback(()=>{
//     setRefreshing(true);
//     wait(2000).then(()=>{
//       setRefreshing(false)
//     })
//   },[]);

//   const [number,setNumber] = useState(0);
//   const [isRandom,setRandom] = useState(false);

//   const randomWithoutMemo = Math.random();
//   const randomNumber = useMemo(()=>{
//     return Math.random();
//   },[isRandom]);


  


  // return(
  //   <SafeAreaView style={styles.container}>
  //     <ScrollView 
  //     contentContainerStyle = {styles.scrollView} 
  //     refreshControl={
  //         <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
  //     }
  //     >
  //       <Text>Pull down to se RefreshControl indicator</Text>
  //     </ScrollView>
  //   </SafeAreaView>
    // <View style = {styles.container}>
    //   <View style = {styles.countContainer}>
    //     <Button title="down" onPress={()=>{
    //       setNumber(number - 1)
    //     }}></Button>
    //     <Text>{number}</Text>
    //     <Button title="up" onPress={()=>{
    //       setNumber(number + 1)
    //     }}></Button>
    //   </View>
    //   <Text>without useMemo:{randomWithoutMemo}</Text>
    //   <Text>use Memo:{randomNumber}</Text>
    //   <Button title="random" onPress={()=>{
    //       setRandom(!isRandom)
    //     }}></Button>
    // </View>
  // );
// }

export default App;



