import React from 'react'
import {view, View, ScrollView} from 'react-native'
import ImageButton from '../../../Common/image-button'

const Trending = (props) => {
    const trending = [
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

    const renderListItem = (trending) => {
        return trending.map(item => 
            <ImageButton width = {120} title = {item.title}/>)
    }
    
    return(
        <View>
            <ScrollView horizontal = {true} style = {{marginTop: 5, flexDirection: 'row', flexWrap: 'wrap'}} >
                {renderListItem(trending)}
            </ScrollView>
        </View>
    )
}

export default Trending;