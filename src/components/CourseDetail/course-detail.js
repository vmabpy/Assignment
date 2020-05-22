import React from 'react'
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native'
import VideoPlayer from './VideoPlayer/video-player'
import { ScrollView } from 'react-native-gesture-handler'
import { padding } from '../../globals/constants'
import LeftAuthorButton from '../Common/left-author-button'
import OptionItem from './ListOption/option-item'
import ListOption from './ListOption/list-option'
const CourseDetail = (props) => {
    let item = props.route.params.item
    console.log(item)
    props.navigation.setOptions({ title: item.title })
    return (
        <View style={styles.container}>
            <VideoPlayer />
            <ScrollView>
                <Text style={styles.title}>{`${item.title}`}</Text>
                <LeftAuthorButton item={item} />
                <Text style={styles.darkText}>{`${item.level} . ${item.released} . ${item.duration}`}</Text>
                <ListOption />
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
        backgroundColor: '#fff',
    },
    title: {
        marginTop: padding._10,
        marginLeft: padding._10,
        fontSize: padding._20,
        fontWeight: 'bold',
    },
    darkText: {
        marginTop: padding._5,
        marginLeft: padding._10,
        color: 'darkgray',
    }
})

export default CourseDetail;