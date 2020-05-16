import React from 'react'
import {View, Text, Button} from 'react-native'

const CourseDetail = (props) => {
    let item = props.route.params.item
    console.log(item)
    props.navigation.setOptions({title: item.title})
    return(
        <View>
            <Text>This is the course detail</Text>
            <Text>{`${item.title} - ${item.author}`}</Text>
            <Button 
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
            />
        </View>
    )
}

export default CourseDetail;