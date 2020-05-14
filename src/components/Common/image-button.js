import React from 'react'
import {View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native'

const ImageButton = (props) => {
    return(
        <ImageBackground style = {styles.button} source = {{uri: 'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/7416220/910/607/m2/fpnw/wm1/erwfm6mzdjnmro6osjcrrwznat6yewszccs4kpobcsksrmdnzbmrd1isbrk4e97q-.jpg?1575545197&s=84396cdbca8381a02f56877079ab6f8e'}} >
            <TouchableOpacity 
            style = {styles.touch} 
            onPress = {props.onPress}>
                <Text style = {styles.text}>{props.title}</Text>
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