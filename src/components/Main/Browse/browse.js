import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ImageButton from '../../Common/image-button'
import RadiusButton from '../../Common/radius-button'
import ListLanguage from './ListLanguage/list-language'
import LearningPath from './LearningPath/learning-path'
import Trending from './Trending/trending'
import Authors from './Authors/AuthorList/list-author'
import { courseNewRelease } from '../../../globals/courses'
import { courseRecommend } from '../../../globals/courses'

const Browse = (props) => {

    const handleNewRelease = () => {
        props.navigation.navigate("NewRealse", { courseNewRelease })
    }

    const handleRecommend = () => {
        props.navigation.navigate("Recommendation", { courseRecommend })
    }

    return (
        <ScrollView>
            <ImageButton width='98%'
                title="NEW RELEASE" onPress={handleNewRelease} />
            <ImageButton width='98%' title="RECOMMEND FOR YOU" onPress={handleRecommend} />
            <ListLanguage title="Popular skills" navigation={props.navigation} />
            {/* <Trending /> */}
            <LearningPath title="Path" navigation={props.navigation} />
            <Authors title="Top Authors" />
        </ScrollView>
    )
}

export default Browse;