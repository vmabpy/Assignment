import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import SectionCoursesItem from '../SectionCoursesItem/section-courses-item';

const SectionCourses = (props) => {

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
                {renderListItem(props.courses)}
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