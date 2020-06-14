import React from 'react'
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native'
import RadiusButton from '../../../Common/radius-button'
import { courseLanguage } from '../../../../globals/courses'

const ListLanguage = (props) => {


    const onPressListItem = (item) => {
        props.navigation.navigate('CourseLanguageDetail', { item })
    }

    const renderListItem = (courseLanguage) => {
        return courseLanguage.map(item => <RadiusButton item={item} navigation={props.navigation} onPressListItem={onPressListItem} />)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <ScrollView horizontal={true} style={{ marginTop: 5 }}>
                {renderListItem(courseLanguage)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default ListLanguage;