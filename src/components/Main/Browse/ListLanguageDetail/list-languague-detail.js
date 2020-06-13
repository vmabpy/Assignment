import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ListCourses from '../../../Courses/ListCourses/list-courses'
import { ScrollView } from 'react-native-gesture-handler'
import SectionCourses from '../../Home/SectionCourses/section-courses'
import { courseData } from '../../../../globals/courses'

const ListLanguageDetail = (props) => {
    let item = props.route.params.item
    props.navigation.setOptions({ title: item.title })

    return (
        <ScrollView>
            <SectionCourses title="New" courses={item.newCourse} navigation={props.navigation} />
            <SectionCourses title="Trending" courses={item.trendingCourse} navigation={props.navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})


export default ListLanguageDetail;
