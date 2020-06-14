import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert, Share } from 'react-native'

const ListCoursesItem = (props) => {
    return (
        <TouchableOpacity style={styles.item}
            onPress={() => {
                props.onPressListItem(props.item)
            }}
        >
            <Image source={props.item.imageUri} style={styles.image} />
            <View style={{ margin: 5 }}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{props.item.author}</Text>
                <Text style={styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        margin: 5,
        // borderBottomColor: 'gray',
        // borderBottomWidth: 1,
    },
    image: {
        height: 100,
        width: 180,
    },
    darkText: {
        color: 'darkgray',
    }
})

export default ListCoursesItem