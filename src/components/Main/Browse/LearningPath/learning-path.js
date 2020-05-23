import React from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import SectionCoursesItem from '../../Home/SectionCoursesItem/section-courses-item'

const LearningPath = (props) => {
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
        props.navigation.navigate('CourseDetail', { item })
    }

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />)
    }

    return (
        <View>
            <View style={{ marginLeft: 5 }}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(courses)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'darkgray',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default LearningPath;