import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation, ScrollView } from 'react-native'
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const screenHeight = Math.round(Dimensions.get('window').height);


export const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const { signUp } = React.useContext(AuthContext);

    const handleSignUp = () => {
        signUp()
    }

    return (
        <View>
            <StatusBar barStyle='light-content' />
            <View style={styles.viewBubble}></View>
            <View style={styles.viewBubbleYellow}></View>
            <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
                <Ionicons name='ios-arrow-round-back' size="32" color="#FFF" />
            </TouchableOpacity>
            <Text style={styles.greeting}>{`Hello\n Sign up to get started`}</Text>
            <View style={styles.form}>
                <View>
                    <Text style={styles.inputTitle}>Full Name</Text>
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onChangeText={name => setName(name)}
                        value={name} />
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onChangeText={email => setEmail(email)}
                        value={email} />
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry autoCapitalize="none"
                        onChangeText={password => setPassword(password)}
                        value={password} />
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.textLogin}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textSignUp} onPress={() => navigation.navigate('SignIn')}>
                <Text style={{ color: "#414959", fontSize: 13 }}>
                    New to SocialApp? <Text style={{ fontWeight: '500', color: '#E9446A' }}>Login</Text>
                </Text>
            </TouchableOpacity>
            <View style={styles.viewBubbleBottom}></View>
            <View style={styles.viewBubbleButtonLeft}></View>
            {/* <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => signUp()} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    containerLogin: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center',
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    form: {
        marginTop: 72,
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D',
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: '#E9446A',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogin: {
        color: "#fff",
        fontWeight: "500",
    },
    textSignUp: {
        alignSelf: 'center',
        marginTop: 32,
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
    },
    viewBubble: {
        backgroundColor: "#ED587E",
        height: 0.5 * screenHeight,
        width: 0.5 * screenHeight,
        marginLeft: '40%',
        marginTop: -176,
        borderRadius: 0.25 * screenHeight,
    },
    viewBubbleYellow: {
        position: 'absolute',
        marginTop: -120,
        marginLeft: -50,
        height: 0.3 * screenHeight,
        width: 0.3 * screenHeight,
        borderRadius: 0.15 * screenHeight,
        backgroundColor: '#F9B97A',

    },
    viewBubbleBottom: {
        backgroundColor: '#FCE3EB',
        height: 0.3 * screenHeight,
        width: 0.3 * screenHeight,
        borderRadius: 0.15 * screenHeight,
        right: -300,

    },
    viewBubbleButtonLeft: {
        position: 'absolute',
        height: 0.2 * screenHeight,
        width: 0.2 * screenHeight,
        borderRadius: 0.1 * screenHeight,
        backgroundColor: "#FEEBE4",
        right: -5,
        bottom: -120,
    },
    buttonBack: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21,22,48,0.1)",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Register;