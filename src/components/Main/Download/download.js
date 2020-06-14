import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item'
import { DownLoadContext } from '../../../provider/download-provider'

const Download = (props) => {

    const onPressListItem = (item) => {
        props.navigation.navigate("CourseDetail", { item })
    }

    const FlatListItemSeparator = () => {
        return (
            <View style={styles.separator}></View>
        )
    }

    return (
        // <DownLoadContext.Consumer>
        //     {
        //         ({ downdload }) => {
        //             console.log('download courese: ', downdload)
        //             return (
        //                 <FlatList
        //                     data={downdload}
        //                     renderItem={({ item }) => <ListCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />}
        //                     ItemSeparatorComponent={FlatListItemSeparator}
        //                 />
        //             )
        //         }
        //     }
        // </DownLoadContext.Consumer>
        <DownLoadContext.Consumer>
            {
                ({ download }) => {
                    return (
                        <FlatList
                            data={download}
                            renderItem={({ item }) => <ListCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />}
                            ItemSeparatorComponent={FlatListItemSeparator}
                        />
                    )
                }
            }
        </DownLoadContext.Consumer>
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
    },
})

export default Download;