import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OptionItem from './option-item'

const ListOption = (props) => {
    const options = [
        {
            id: 1,
            imageRoute: require('../../../../assets/author.jpeg'),
            title: 'Bookmark',
        },
        {
            id: 2,
            imageRoute: require('../../../../assets/author.jpeg'),
            title: 'Add to Channel',
        },
        {
            id: 3,
            imageRoute: require('../../../../assets/author.jpeg'),
            title: 'Download',
        }

    ]
    return (
        <View style={styles.container}>
            <OptionItem item={options[0]} />
            <OptionItem item={options[1]} />
            <OptionItem item={options[2]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default ListOption;