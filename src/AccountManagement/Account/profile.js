import React, { useContext } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { AuthenticationContext } from "../../provider/authentication-provider";
import { ScrollView } from "react-native-gesture-handler";

const Profile = (props) => {
  // const item = props.route.params.item;
  // const { state } = useContext(AuthenticationContext);

  return (
    // <View style={styles.container}>
    //     {/* <Text>{item.username}</Text>
    //     <Text>{item.fullName}</Text> */}
    //     <Text>{authentication.user.username}</Text>
    //     <Text>{authentication.user.fullName}</Text>

    // </View>
    <ScrollView>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/ic_profile.png")}
            style={styles.image}
          />
          {/* <Text style={styles.name}>{state.userInfo.name}</Text> */}
          <Text style={styles.name}>Hieu Tong</Text>
        </View>

        {/* <Text>{authentication.user.fullName}</Text> */}
        <View style={styles.view}>
          <Text style={styles.title}>Activity insights (last 30 days)</Text>
          <Text style={styles.subTitle}>TOTAL ACTIVE DAYS</Text>
          <Text style={styles.title}>4 days streak</Text>
          <Text style={styles.subTitle}>MOST ACTIVE TIME OF DAY</Text>
          <Text style={styles.title}>14:00</Text>
          <Text style={styles.subTitle}>MOST VIEW SUBJECT</Text>
          <Text style={styles.title}>React Native</Text>
        </View>
      </View>
    </ScrollView>
  );
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 50,
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  view: {
    alignItems: "flex-start",
    marginLeft: 5,
    marginTop: 20,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
