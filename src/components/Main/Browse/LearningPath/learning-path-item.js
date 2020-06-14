import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

const LearningPathItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                props.onPressListItem(props.item)
            }}>
            <Image source={props.item.imageUri} style={styles.image} />
            <View style={{ margin: 5 }}>
                <Text>{props.item.title}</Text>
                <Text style={styles.darkText}>{`${props.item.total}`} courses</Text>
                <Text style={styles.darkText}>{`${props.item.duration}`}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        margin: 5,
        height: 200,
        width: 200,
        backgroundColor: 'lightgray',
    },
    image: {
        height: 100,
        width: 200,
    },
    darkText: {
        color: 'darkgray',
    }
})

export default LearningPathItem;