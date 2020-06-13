import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListCoursesItem from '../../../Courses/ListCoursesItem/list-courses-item'

const LearningPathDetail = (props) => {
    let item = props.route.params.item
    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
export default LearningPathDetail