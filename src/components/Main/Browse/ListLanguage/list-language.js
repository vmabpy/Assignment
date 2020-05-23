import React from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import RadiusButton from '../../../Common/radius-button'

const ListLanguage = (props) => {
    const courseLanguage = [
        {
            id: 1,
            title: 'React',
        },
        {
            id: 2,
            title: 'Swift',
        },
        {
            id: 3,
            title: 'Android',
        },
        { 
            id: 4,
            title: '.Net',
        }, 
        {
            id: 5,
            title: 'ReactJS',
        }, 
        {
            id: 6,
            title: 'C#',
        }
    ]

    const renderListItem = (courseLanguage) => {
        return courseLanguage.map(item => <RadiusButton item = {item}/>)
    }

    return(
        <View>
            <Text style = {styles.text}>{props.title}</Text>
            <ScrollView horizontal = {true} style = {{marginTop: 5}}>
                {renderListItem(courseLanguage)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'darkgray',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default ListLanguage;