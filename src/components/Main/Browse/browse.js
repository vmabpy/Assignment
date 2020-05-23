import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ImageButton from '../../Common/image-button'
import RadiusButton from '../../Common/radius-button'
import ListLanguage from './ListLanguage/list-language'
import LearningPath from './LearningPath/learning-path'
import Trending from './Trending/trending'
import Authors from './Authors/AuthorList/list-author'

const Browse = (props) => {
    return (
        <ScrollView>
            <ImageButton width='98%'
                title="NEW RELEASE" />
            <ImageButton width='98%' title="RECOMMEND FOR YOU" />
            <ListLanguage title="Popular skills" />
            <Trending />
            <LearningPath title="Path" navigation={props.navigation} />
            <Authors title="Top Authors" />
        </ScrollView>
    )
}

export default Browse;