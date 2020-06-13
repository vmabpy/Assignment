// '../../../assets/author.jpeg'

import React from 'react'
import { View, ScrollView, Text, StyleSheet } from 'react-native'
import AuthorItem from '../AuthorItem/author-item'

const Authors = (props) => {

    const authors = [
        {
            id: 1,
            name: 'John',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },
        {
            id: 2,
            name: 'Chris',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },
        {
            id: 3,
            name: 'Ven',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },
        {
            id: 4,
            name: 'Ken',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },
        {
            id: 5,
            name: 'Tu',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },
        {
            id: 6,
            name: 'Nghia',
            imageRoute: require('../../../../../../assets/author.jpeg'),
        },

    ]

    const renderListItem = (authors) => {
        return authors.map(item => <AuthorItem item={item} />);
    }


    return (
        <View>
            <View>
                <Text style={styles.text}>{props.title}</Text>
            </View>
            <ScrollView horizontal={true}>
                {renderListItem(authors)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default Authors;