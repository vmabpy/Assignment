import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const OptionItem = (props) => {
    return (

        <TouchableOpacity style={styles.conatiner}>
            <View>
                <Image source={props.item.imageRoute} style={styles.viewIcon} />
            </View>
            <Text style={styles.titleIcon}>{props.item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        width: 95,
        marginVertical: 12,
    },
    viewIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
        resizeMode: 'contain',
    },
    titleIcon: {
        color: '#888',
        fontSize: 12,
        fontWeight: "600",
        marginTop: 6,
        textAlign: 'center',
    }
})

export default OptionItem;