
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { padding } from '../../../globals/constants'
const AuthorCourse = (props) => {
    return (
        <View style={styles.containView}>
            <TouchableOpacity style={styles.container}>
                <Image
                    style={styles.image}
                    source={props.item.imageRoute} />
                <Text style={styles.titleAuthor}>{props.item.title} </Text>
            </TouchableOpacity>
        </View >
    )
}


const styles = StyleSheet.create({
    containView: {
        flexDirection: 'row',
        marginLeft: padding._5,
    },
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

export default AuthorCourse;
