import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const SectionCoursesItem = (props) => {
    return(
        <View style = {styles.item}>
            <Image source = {require('../../../../../assets/ic_course.jpg')} style = {styles.image}/>
            <View style = {{margin: 5}}>
                <Text>{props.item.title}</Text>
                <Text style = {styles.darkText}>{props.item.author}</Text>
                <Text style = {styles.darkText}>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    item: {
        margin: 5,
        height: 200,
        width: 200,
        backgroundColor: 'lightgray',
    },
    image: {
        height: 100,
        width: 200,
    },
    darkText: {
        color: 'darkgray',
    }
})

export default SectionCoursesItem;