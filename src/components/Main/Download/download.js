import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item'

const Download = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Mai Pham',
            level: 'Advance',
            released: 'May 6, 2020',
            duration: '30 hours',
        },
        {
            id: 2,
            title: 'iOS',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: 3,
            title: 'android',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ]


    const onPressListItem = (item) => {
        props.navigation.navigate("CourseDetail", { item })
    }

    const FlatListItemSeparator = () => {
        return (
            <View style={styles.separator}></View>
        )
    }

    return (

        <FlatList
            data={courses}
            renderItem={({ item }) => <ListCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />}
            ItemSeparatorComponent={FlatListItemSeparator}
        />
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
    },
})

export default Download;