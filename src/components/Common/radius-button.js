import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const RadiusButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => { props.onPressListItem(props.item) }}>
            <Text style={styles.text}>{props.item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 70,
        borderRadius: 15,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
    }
})

export default RadiusButton;