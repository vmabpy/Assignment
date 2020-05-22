import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { padding } from '../../globals/constants'

const LeftAuthorButton = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'start', marginLeft: padding._5 }}>
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.image}
                    source={props.item.imageRoute} />
                <Text style={styles.titleAuthor}>{props.item.title} </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'gray',
        height: 30,
        borderRadius: 10,
        padding: 5,
    },
    image: {
        height: 25,
        width: 25,
        borderRadius: 15,
    },
    titleAuthor: {
        marginLeft: padding._5,
        marginRight: padding._5,
        color: 'white',
    }
})

export default LeftAuthorButton;