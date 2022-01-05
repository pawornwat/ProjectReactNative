import React from 'react'
import { View, Text, StyleSheet ,Button} from 'react-native'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>
            หน้าหลัก
            </Text>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About',{email:'aaaa@gmail.com'})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
