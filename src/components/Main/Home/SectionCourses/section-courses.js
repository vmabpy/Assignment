import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Mai Pham',
            imageRoute: require('../../../../../assets/author.jpeg'),
            level: 'Advance',
            released: 'May 6, 2020',
            duration: '30 hours',
        },
        {
            id: 2,
            title: 'iOS',
            author: 'Huy Nguyen',
            imageRoute: require('../../../../../assets/author.jpeg'),
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: 3,
            title: 'android',
            author: 'Huy Nguyen',
            imageRoute: require('../../../../../assets/author.jpeg'),
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ]

    const onPressListItem = (item) => {
        props.navigation.navigate('CourseDetail', { item })
    }

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />);
    }

    return (
        <View>
            <View>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(courses)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
    }
})

export default SectionCourses;