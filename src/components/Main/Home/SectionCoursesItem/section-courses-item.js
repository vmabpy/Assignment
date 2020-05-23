import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SectionCoursesItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => {
                props.onPressListItem(props.item)
            }}>
            <Image source={require('../../../../../assets/ic_course.jpg')} style={styles.image} />
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

export default SectionCoursesItem;