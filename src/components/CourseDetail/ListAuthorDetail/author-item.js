import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { padding } from '../../../globals/constants'

const LeftAuthorButton = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={props.item.imageRoute} />
            <Text>{props.item.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: padding._20,
        width: padding._20,
        borderRadius: padding._10,
    },
    titleAuthor: {
        marginLeft: padding._5,
        marginRight: padding._5,
    }
})

export default LeftAuthorButton;