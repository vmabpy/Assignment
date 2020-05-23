import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {
    return (
        <ImageBackground style={[styles.button, { width: props.width }]} source={require('../../../assets/ic_browse_sample.jpg')} >
            <TouchableOpacity
                style={styles.touch}
                onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    button: {
        height: 100,
        margin: 5,
    },
    touch: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    }
})

export default ImageButton;