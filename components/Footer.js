import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Footer() {
    const users =[
        {id:1,name:'fight'},
        {id:2,name:'test'}
    ]
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState("Hello");

    useEffect(() => {
        console.log('use effect1')
    })
    useEffect(() => {
        console.log('use effect2')
    },[])
    useEffect(() => {
        console.log('use effect3')
    },[count])

    return (
        <View>
            <Text style={styles.title}>This Footer</Text>
            {
                users.map((user,index)=>{
                    return <Text key={user.id}> {index+1} {user.name}</Text>
                })
            }
            <Text>{count}</Text>
            <Button 
            title='Click Me'
            onPress={()=>{
                setCount(count+5)
            }}
            ></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    title:{
        fontSize:40,
    }
})