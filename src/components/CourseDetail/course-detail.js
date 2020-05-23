import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import { ScrollView } from 'react-native-gesture-handler'
import { padding } from '../../globals/constants'
import ListOption from './ListOption/list-option'
import AuthorCourse from './ListAuthorDetail/author-course'
import ReviewItem from './ListReviewCourse/review-item'
import ListLessonItem from './ListLessonItem/list-lesson-item'
import ListLesson from './ListLesson/list-lesson'

const CourseDetail = (props) => {
    let item = props.route.params.item
    console.log(item)
    props.navigation.setOptions({ title: item.title })

    const review = [
        {
            id: 0,
            imageRoute: require('../../../assets/author.jpeg'),
            title: 'Take a learning check'
        },
        {
            id: 1,
            imageRoute: require('../../../assets/author.jpeg'),
            title: 'View related path and course'
        }
    ]
    return (
        <View style={styles.container}>
            <VideoPlayer />
            <ScrollView>
                <Text style={styles.title}>{`${item.title}`}</Text>
                <AuthorCourse item={item} />
                <Text style={styles.darkText}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
                <ListOption />
                <ReviewItem item={review[0]} />
                <ReviewItem item={review[1]} />

                <ListLesson />

            </ScrollView>
            {/* <Text>{`${item.title}`}</Text>
            <Text>{`${item.author}`}</Text> */}
            {/* <Button 
                title = "Go to the relevant course"
                onPress = {() => {
                    props.navigation.push('CourseDetail', {item: props.route.params.item.title})
                }}
            />
            <Button 
                title = "Go to the course detail"
                onPress = {() => {
                    props.navigation.navigate('ListCourses')
                }}
            />
            
            <Button 
                title = "Go back"
                onPress = {() => {
                    props.navigation.goBack()
                }}
            />

            <Button 
                title = "Go to the root"
                onPress = {() => {
                    props.navigation.popToTop()
                }}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24221f',
    },
    title: {
        marginTop: padding._10,
        marginLeft: padding._10,
        fontSize: padding._20,
        fontWeight: 'bold',
        color: 'white',
    },
    darkText: {
        marginTop: padding._5,
        marginLeft: padding._10,
        color: 'darkgray',
    }
})

export default CourseDetail;