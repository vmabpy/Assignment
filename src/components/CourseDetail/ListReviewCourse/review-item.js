import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { padding } from '../../../globals/constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ReviewItem = (props) => {
    return (
        <TouchableOpacity style={styles.containerView}>
            <Image
                style={styles.image}
                source={props.item.imageRoute}
            />
            <Text style={styles.title}>{props.item.title}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    containerView: {
        flexDirection: 'row',
        margin: padding._10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 5,
        backgroundColor: 'gray',

    },
    image: {
        height: 20,
        width: 20,
    },
    title: {
        marginLeft: padding._5,
        color: 'white',
    }
})

export default ReviewItem;