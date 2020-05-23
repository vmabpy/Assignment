import React from 'react'
import { View, Text, StyleSheet, SectionList, Alert } from 'react-native'
import { padding } from '../../../globals/constants'
import ListLessonItem from '../ListLessonItem/list-lesson-item'

const ListLesson = (props) => {
    const FlatListItemSeparator = () => {
        return (
            <View style={styles.separator}></View>
        )
    }

    const courseSectionDeatail = [
        {
            title: 'Course Overview',
            data: [
                {
                    id: 1,
                    title: 'Course Overview',
                    time: '3:00',
                }
            ]
        },
        {
            title: 'Course Introduction',
            data: [
                {
                    id: 1,
                    title: 'Getting Started',
                    time: '3:00',
                }
            ]

        },
        {
            title: 'Key Concepts and Core Service',
            data: [
                {
                    id: 1,
                    title: 'What will we cover',
                    time: '2:00',
                },
                {
                    id: 2,
                    title: 'Understading React Native',
                    time: '2:00',
                },
                {
                    id: 3,
                    title: 'React Hook',
                    time: '1:50',
                }
            ]

        },
    ]

    return (
        <View>
            <SectionList
                SectionSeparatorComponent={FlatListItemSeparator}
                sections={courseSectionDeatail}
                renderItem={({ item }) => <ListLessonItem item={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <View style={styles.header}>
                        <View style={styles.viewNumber}>
                            <Text style={styles.titleNumber}>{keyExtractor.index}</Text>
                        </View>
                        <View>
                            <Text style={styles.titleSection}>{title}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionitem: {
        margin: padding._5,
        height: 100,
        width: 100,
    },
    separator: {
        height: 0.5,
        width: '100%',
        backgroundColor: 'gray',
    },
    header: {
        flexDirection: 'row',
        margin: 5,
    },
    viewNumber: {
        height: 50,
        width: 100,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleNumber: {
        color: 'white',
        alignSelf: 'center',
    },
    titleSection: {
        color: 'white',
        margin: 5,
    }
})

export default ListLesson;