import React from 'react'
import  {Image, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'

const Login = (props) => {
    return (
        <ScrollView style = {styles.container}>
            <Image style = {styles.logo} source = {require('../../../../assets/icon.png')} />
            <TextInput
                style = {styles.textinput}
                placeholder = "Username"
            />
            <TextInput
                style = {styles.textinput}
                placeholder = "Password"
            />
            <TouchableOpacity style = {styles.button}>
                <Text style = {styles.buttonText}>Login</Text>
            </TouchableOpacity>

        </ScrollView>
        
    ) 
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    logo: {
        width: 150,
        height: 150,
    },
    textinput: {
        height: 40,
        marginTop: 20,
        textAlign: 'center',
        width: '98%',
        borderColor: 'gray',
        borderWidth: 1,
    },
    button: {
        height: 40,
        marginTop: 20,
        width: '98%',
        backgroundColor: 'red',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
    }
})


export default Login;