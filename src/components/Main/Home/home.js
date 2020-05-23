import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import SectionCourses from './SectionCourses/section-courses';
import ImageButton from '../../Common/image-button';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Home = (props) => {
    const item = props.route.params.status.user

    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Profile', { item })
            }}>
                <View style={{ marginRight: 10 }}>
                    <Image source={require('../../../../assets/ic_profile.png')} style={styles.image} />
                </View>
            </TouchableOpacity>
        ),
    })

    return (
        <ScrollView>
            <SectionCourses title="Continue Learning" navigation={props.navigation} />
            <SectionCourses title="Path" navigation={props.navigation} />
            <SectionCourses title="Channel" navigation={props.navigation} />
            <SectionCourses title="Bookmarks" navigation={props.navigation} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        borderRadius: 15,
    }
})

export default Home;