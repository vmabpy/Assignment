import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native'
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';




const Home = (props) => {
    const onPressNewReleases = () => {
        console.log('Hello')
    }

    return(
        
        <ScrollView>
            {/* <ImageButton title = 'NEW RELEASES' onPress = {onPressNewReleases()}/> */}
            <SectionCourses title = "Continue Learning" />
            <SectionCourses title = "Path" />
            <SectionCourses title = "Channel" />
            <SectionCourses title = "Bookmarks" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
})

export default Home;