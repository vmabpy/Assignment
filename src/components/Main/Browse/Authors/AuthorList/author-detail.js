import React from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ListCoursesItem from '../../../../Courses/ListCoursesItem/list-courses-item'

const ListAuthorDetail = (props) => {
    let item = props.route.params.item
    props.navigation.setOptions({ title: 'Author' })
    const onPressListItem = (item) => {
        props.navigation.navigate("CourseDetail", { item })
    }
    const FlatListItemSeparator = () => {
        return (
            <View style={styles.separator}></View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{
                alignItems: 'center',
            }}>
                <Image source={item.imageRoute} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.titleName}>{item.titleName}</Text>
            </View>
            <FlatListItemSeparator />

            <View style={{ margin: 5, height: 30, justifyContent: 'center' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Courses</Text>
            </View>
            <FlatListItemSeparator />
            <FlatList
                data={item.courses}
                renderItem={({ item }) => <ListCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />}
                ItemSeparatorComponent={FlatListItemSeparator}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {

        height: 100,
        width: 100,
        borderRadius: 50,
        marginTop: 50,
    },
    name: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleName: {
        marginTop: 5,
        color: 'darkgray',
        fontSize: 16,
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
    },
})

export default ListAuthorDetail;