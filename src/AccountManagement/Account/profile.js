import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AuthenticationContext } from '../../provider/authentication-provider'

const Profile = (props) => {
    const item = props.route.params.item
    const { authentication } = useContext(AuthenticationContext)

    return (
        <View style={styles.container}>
            {/* <Text>{item.username}</Text>
            <Text>{item.fullName}</Text> */}
            <Text>{authentication.user.username}</Text>
            <Text>{authentication.user.fullName}</Text>

        </View>
    )
    // return (
    //     <AuthenticationContext.Consumer>
    //         {
    //             ({ authentication }) => {
    //                 console.log('profile authentication: ', authentication)
    //                 return (
    //                     <ThemeContext.Consumer>
    //                         {
    //                             ({ theme, setTheme }) => {
    //                                 return (
    //                                     <View style={{ ...styles.container, backgroundColor: theme.background }}>
    //                                         {/* <Text>{item.username}</Text>
    //                                         <Text>{item.fullName}</Text> */}
    //                                         <Text>{authentication.user.username}</Text>
    //                                         <Text>{authentication.user.fullName}</Text>
    //                                     </View>
    //                                 )
    //                             }
    //                         }
    //                     </ThemeContext.Consumer>

    //                 )
    //             }
    //         }
    //     </AuthenticationContext.Consumer>
    // )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Profile;