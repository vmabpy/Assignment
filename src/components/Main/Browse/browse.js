import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import ImageButton from '../../Common/image-button'
import RadiusButton from '../../Common/radius-button'
import ListLanguage from './ListLanguage/list-language'
import LearningPath from './LearningPath/learning-path'
import Trending from './Trending/trending'

const Browse = (props) => {
    return (
        <ScrollView>
            <ImageButton width = '98%'
                title = "NEW RELEASE" />
            <ImageButton width = '98%' title = "RECOMMEND FOR YOU"/>
            <ListLanguage title = "Popular skills" />
            <Trending />
            <LearningPath title = "Path"/>
        </ScrollView>
    )
}

export default Browse;