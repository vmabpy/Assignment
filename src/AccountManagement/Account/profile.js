import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import Button from "../../components/Common/button";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../redux/userRedux";
import {
  ICONPROFILE,
  ICONPASSWORD,
  ICONACCOUNT,
  ICONMAIL,
  ICONLOGOUT,
  ICONDOWNLOAD,
} from "../../config/icon";
import ListCoursesItem from "../../components/Courses/ListCoursesItem/list-courses-item";
import ProfileItem from "./profileItem";
import Constants from "expo-constants";
import I18n from "ex-react-native-i18n";

const Profile = (props) => {
  const { getInfoMe, userMe, user = {}, tokenSave } = props;
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload && tokenSave) {
      getInfoMe(() => {
        setReload(false);
      });
    }
  }, [reload]);

  useEffect(() => {
    setReload(true);
  }, [user.avatar, user.name, user.phone]);

  const profileItem = [
    {
      id: 0,
      icon: ICONACCOUNT,
      title: I18n.t("kye_update_profile"),
    },
    {
      id: 1,
      icon: ICONPASSWORD,
      title: I18n.t("key_change_password"),
    },
    {
      id: 2,
      icon: ICONMAIL,
      title: I18n.t("key_change_email"),
    },
    {
      id: 3,
      icon: ICONACCOUNT,
      title: I18n.t("key_term_of_use"),
    },
    {
      id: 4,
      icon: ICONDOWNLOAD,
      title: I18n.t("key_download_courses"),
    },
    {
      id: 5,
      icon: ICONLOGOUT,
      title: I18n.t("key_log_out"),
    },
  ];

  const onPressItem = (item) => {
    const id = item.id;
    switch (id) {
      case 0:
        props.navigation.navigate("UpdateInfoUser", { user: userMe });
        break;
      case 1:
        props.navigation.navigate("Changepassword");
        break;
      case 2:
        Alert.alert(I18n.t("key_remind"), I18n.t("key_comming_soon"));
        break;
      case 3:
        Alert.alert(I18n.t("key_remind"), I18n.t("key_comming_soon"));
        break;
      case 4:
        Alert.alert(I18n.t("key_remind"), I18n.t("key_comming_soon"));
        break;
      default:
        props.logout(() => {});
        break;
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewInfo}>
        <Image
          source={userMe.avatar ? { uri: userMe.avatar } : ICONPROFILE}
          style={styles.image}
        />
        <View style={styles.viewInfoSub}>
          <Text style={styles.title}>{userMe.name}</Text>
          <Text style={styles.subTitle}>{userMe.phone}</Text>
          <Text style={styles.subTitle}>{userMe.email}</Text>
        </View>
      </View>
      <View>
        <ProfileItem item={profileItem[0]} onPressItem={onPressItem} />
        <ProfileItem item={profileItem[1]} onPressItem={onPressItem} />
        <ProfileItem item={profileItem[2]} onPressItem={onPressItem} />
        <ProfileItem item={profileItem[3]} onPressItem={onPressItem} />
        <ProfileItem item={profileItem[4]} onPressItem={onPressItem} />
        <ProfileItem item={profileItem[5]} onPressItem={onPressItem} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInfo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    margin: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  viewInfoSub: {
    flex: 1,
    alignItems: "stretch",
  },
  view: {
    alignItems: "flex-start",
    marginLeft: 5,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 14,
    color: "gray",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#417AF9",
  },
  buttonLogout: {
    marginHorizontal: 40,
    marginTop: 160,
  },
});

//get data
const mapStateToProps = (state) => ({
  userMe: loGet(state, ["user", "userMe"], {}),
  user: loGet(state, ["user", "userInfo"]),
  tokenSave: loGet(state, ["user", "token"]),
});

//call api to get response
const mapDispatchToProps = (dispatch) => ({
  getInfoMe: (actionSuccess) =>
    dispatch(UserActions.getMeRequest(actionSuccess)),
  logout: (actionSuccess) => dispatch(UserActions.logout(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
