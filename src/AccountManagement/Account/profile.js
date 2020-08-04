import React, { useContext } from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Button from "../../components/Common/button";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../redux/userRedux";

const Profile = (props) => {
  const handleLogout = () => {
    props.logout(() => {});
  };

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../../../assets/ic_profile.png")}
          style={styles.image}
        />
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
      <View style={styles.buttonLogout}>
        <Button text="Log out" handlePress={handleLogout} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
  buttonLogout: {
    marginHorizontal: 40,
    marginTop: 160,
  },
});

//get data
const mapStateToProps = (state) => ({});

//call api to get response
const mapDispatchToProps = (dispatch) => ({
  logout: (actionSuccess) => dispatch(UserActions.logout(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
