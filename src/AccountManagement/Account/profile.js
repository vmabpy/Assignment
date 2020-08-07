import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  useCallback,
} from "react-native";
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
  ICONSETTING,
} from "../../config/icon";
import ListCoursesItem from "../../components/Courses/ListCoursesItem/list-courses-item";
import ProfileItem from "./profileItem";

const Profile = (props) => {
  const { userInfo = {} } = props;
  const [reLoad, setReLoad] = useState(true);

  const handleLogout = () => {
    props.logout(() => {});
  };

  const profileItem = [
    {
      id: 0,
      icon: ICONACCOUNT,
      title: "Cập nhật thông tin",
    },
    {
      id: 1,
      icon: ICONPASSWORD,
      title: "Thay đổi mật khẩu",
    },
    {
      id: 2,
      icon: ICONMAIL,
      title: "Thay đổi email",
    },
    {
      id: 3,
      icon: ICONACCOUNT,
      title: "Điều khoản sử dụng",
    },
    {
      id: 4,
      icon: ICONSETTING,
      title: "Phiên bản",
      appVersion: "1.0.0",
    },
    {
      id: 5,
      icon: ICONLOGOUT,
      title: "Đăng xuất",
    },
  ];

  const onPressItem = (item) => {
    const id = item.id;
    switch (id) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        alert("2");
        break;
      case 3:
        break;
      case 4:
        break;
      default:
        props.logout(() => {});
        break;
    }
  };
  return (
    <ScrollView style={styles.contain}>
      <View style={styles.viewInfo}>
        <Image
          source={userInfo.avatar ? { uri: userInfo.avatar } : ICONPROFILE}
          style={styles.image}
        />
        <View style={styles.viewInfoSub}>
          <Text style={styles.title}>{userInfo.name}</Text>
          <Text style={styles.subTitle}>{userInfo.phone}</Text>
          <Text style={styles.subTitle}>{userInfo.email}</Text>
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
  contain: {
    backgroundColor: "#EFF0F5",
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
  userInfo: loGet(state, ["user", "userInfo"], {}),
});

//call api to get response
const mapDispatchToProps = (dispatch) => ({
  getInfo: (actionSuccess) =>
    dispatch(UserActions.getInfoUserRequest(actionSuccess)),
  logout: (actionSuccess) => dispatch(UserActions.logout(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
