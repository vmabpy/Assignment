import React from 'react'
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native'

const AuthorItem = (props) => {
    return(
        <View style = {styles.contain}>
            <TouchableOpacity>
                <Image
                    style={styles.button}
                    source={props.item.imageRoute}
                />
            </TouchableOpacity>
            <Text style = {styles.text} >{props.item.name}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 80,
        width: 80,
        borderRadius: 40,
        margin: 5,
    },
    text: {
        marginTop: 5,
        alignSelf: 'center',
    }
})

export default AuthorItem;