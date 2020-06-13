import React from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import SectionCoursesItem from '../../Home/SectionCoursesItem/section-courses-item'
import { coureseLearningPath } from '../../../../globals/courses'
import LearningPathItem from './learning-path-item'

const LearningPath = (props) => {
    const onPressListItem = (item) => {
        props.navigation.navigate('PathDetail', { item })
    }

    const renderListItem = (courses) => {
        return courses.map(item => <LearningPathItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />)
    }

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(coureseLearningPath)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    title: {
        marginLeft: 5,
        marginBottom: 5,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }
})

export default LearningPath;