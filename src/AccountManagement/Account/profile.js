import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const Profile = (props) => {
    const item = props.route.params.item
    return (
        <View style={styles.container}>
            <Text>{item.username}</Text>
            <Text>{item.fullName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile;