import React from 'react'
import {View, Text, FlatList} from 'react-native'
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

    

    return(
        <View>
            <FlatList 
                data = {courses}
                renderItem = {({item}) => <ListCoursesItem item = {item}/>}

            />
        </View>
    )
}

export default Download;