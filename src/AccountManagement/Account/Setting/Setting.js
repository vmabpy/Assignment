import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {
  ICONACCOUNT,
  ICONFEEDBACK,
  ICONLANGUAGE,
  ICONSETTING,
  ICONTHEME,
} from "../../../config/icon";
import { connect } from "react-redux";
import loGet from "lodash/get";
import ProfileItem from "../profileItem";
import I18n from "ex-react-native-i18n";

const Setting = (props) => {
  const onPressItem = (item) => {
    const id = item.id;
    switch (id) {
      case 0:
        Alert.alert("Remind", "Comming soon");
        break;
      case 1:
        props.navigation.navigate("Language");
        break;
      case 2:
        Alert.alert("Remind", "Comming soon");
        break;
      case 3:
        Alert.alert("Remind", "Comming soon");
        break;
      case 4:
        break;
      default:
        break;
    }
  };
  const settingItem = [
    {
      id: 0,
      icon: ICONTHEME,
      title: "Theme",
    },
    {
      id: 1,
      icon: ICONLANGUAGE,
      title: I18n.t("key_language"),
    },
    {
      id: 2,
      icon: ICONFEEDBACK,
      title: "Send feedback",
    },
    {
      id: 3,
      icon: ICONACCOUNT,
      title: "Contact support",
    },
    {
      id: 4,
      icon: ICONSETTING,
      title: "App version",
      appVersion: "1.0.0",
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View>
        <ProfileItem item={settingItem[0]} onPressItem={onPressItem} />
        <ProfileItem item={settingItem[1]} onPressItem={onPressItem} />
        <ProfileItem item={settingItem[2]} onPressItem={onPressItem} />
        <ProfileItem item={settingItem[3]} onPressItem={onPressItem} />
        <ProfileItem item={settingItem[4]} onPressItem={onPressItem} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Setting;
