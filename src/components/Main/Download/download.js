import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item'

const Download = (props) => {
    const courses = [
        {
            id: 1,
            title: 'Learning React Native',
            author: 'Alex Banks',
            imageUri: { uri: 'https://cdn.lynda.com/courses/2833016-637274643135491980_270x480_thumb.jpg' },
            imageRoute: require('../../../../assets/author.jpeg'),
            level: 'Advance',
            released: 'May 6, 2020',
            duration: '30 hours',

        },
        {
            id: 2,
            title: 'Spring: Framework In Depth',
            author: 'Frank Moley',
            imageUri: { uri: 'https://cdn.lynda.com/courses/2822479-637232256327914551_270x480_thumb.jpg' },
            imageRoute: require('../../../../assets/author.jpeg'),
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: 3,
            title: 'Spring: Spring Batch',
            author: 'kevin Bowersox',
            imageUri: { uri: 'https://cdn.lynda.com/courses/2822410-637215106113130506_270x480_thumb.jpg' },
            imageRoute: require('../../../../assets/author.jpeg'),
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