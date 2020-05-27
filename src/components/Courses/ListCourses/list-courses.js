import React from 'react'
import { View, FlatList, TextInput, Button, StyleSheet, SectionList, Text } from 'react-native'
import ListCoursesItem from '../ListCoursesItem/list-courses-item'
import { render } from 'react-dom'
import { ThemeContext, themes } from '../../../../App'

const ListCourses = (props) => {
    const courses = [
        {
            id: 1,
            title: 'React Native',
            author: 'Mai Pham',
            level: 'Advance',
            released: 'May 6, 2020',
            duration: '30 hours',
        },
        {
            id: 2,
            title: 'iOS',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        },
        {
            id: 3,
            title: 'android',
            author: 'Huy Nguyen',
            level: 'Beginner',
            released: 'May 6, 2020',
            duration: '25 hours',
        }
    ]

    const courseSection = [
        {
            title: 'Mobile',
            data: [
                {
                    id: 1,
                    title: 'React Native',
                    author: 'Mai Pham',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Advance',
                    released: 'May 6, 2020',
                    duration: '30 hours',
                },
                {
                    id: 2,
                    title: 'iOS',
                    author: 'Huy Nguyen',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                },
                {
                    id: 3,
                    title: 'android',
                    author: 'Huy Nguyen',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                }
            ]
        },
        {
            title: 'Web',
            data: [
                {
                    id: 1,
                    title: 'React',
                    author: 'Mai Pham',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Advance',
                    released: 'May 6, 2020',
                    duration: '30 hours',
                },
                {
                    id: 2,
                    title: 'ASP.Net',
                    author: 'Huy Nguyen',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                },
                {
                    id: 3,
                    title: 'Java',
                    author: 'Huy Nguyen',
                    imageRoute: require('../../../../assets/author.jpeg'),
                    level: 'Beginner',
                    released: 'May 6, 2020',
                    duration: '25 hours',
                }
            ]
        }
    ]

    const searchView = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.textinput} placeholder="search Text">

                </TextInput>
                <Button onPress={() => {
                    console.log('Search')
                }}
                    title='Search'
                    style={styles.button} />
            </View>
        )
    }

    const renderSearchView = () => {

    }

    const onPressListItem = (item) => {
        props.navigation.navigate("CourseDetail", { item })
    }

    return (
        // <View>
        //     <FlatList 
        //       data = {courses} 
        //       renderItem = {({item}) => <ListCoursesItem item = {item} />}
        //       ListHeaderComponent = {() => searchView()}
        //     />
        // </View>

        <ThemeContext.Consumer>
            {
                ({ theme, setTheme }) => {
                    return (
                        <View style={{ flex: 1 }}>
                            <SectionList
                                style={{ backgroundColor: theme.background }}
                                sections={courseSection}
                                renderItem={({ item }) => <ListCoursesItem navigation={props.navigation} item={item} onPressListItem={onPressListItem} />}
                                renderSectionHeader={({ section: { title } }) => (
                                    <View style={{ backgroundColor: 'white' }}>
                                        <Text>{title}</Text>
                                    </View>
                                )}
                            />
                            <Button
                                title="Change Themes"
                                onPress={() => {
                                    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
                                }}
                            />
                        </View>
                    )
                }
            }
        </ThemeContext.Consumer>



    )
}

const styles = StyleSheet.create({
    textinput: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 5,
    },
    button: {
        height: 40,
        width: 40,
    }
})

export default ListCourses