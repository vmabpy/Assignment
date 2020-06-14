// '../../../assets/author.jpeg'

import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import AuthorItem from '../AuthorItem/author-item'
import { authorCourses } from '../../../../../globals/courses'

const Authors = (props) => {

    const onPressListItem = (item) => {
        props.navigation.navigate('AuthorDetail', { item })
    }


    const renderListItem = (authors) => {
        return authors.map(item => <AuthorItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />);
    }


    return (
        <View>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(authorCourses)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default Authors;