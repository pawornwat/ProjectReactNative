import React from 'react'
import { View, Text } from 'react-native'

const showData = ()=><Text>Hello December</Text>


export default function Logo() {

    const title = "TNO";
    const isTitle = true;
    return (
        <View >
            <Text style={{color:"blue",fontSize:20}}>HIHIHIHIIH</Text>
            {/* <Text>{title}</Text> */}
            {
                
                isTitle?<Text>{title}</Text>:<Text>Thai</Text>
            }
            {showData()}
        </View>
    )
}
