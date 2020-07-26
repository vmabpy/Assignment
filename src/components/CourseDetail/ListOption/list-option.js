import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionItem from "./option-item";
import { DownLoadContext } from "../../../provider/download-provider";

const ListOption = (props) => {
  let value = props.item;
  const options = [
    {
      id: 1,
      imageRoute: require("../../../../assets/ic_bookmark.png"),
      title: "Bookmark",
    },
    {
      id: 2,
      imageRoute: require("../../../../assets/ic_channel.png"),
      title: "Add to Channel",
    },
    {
      id: 3,
      imageRoute: require("../../../../assets/ic_download.png"),
      title: "Favorite",
    },
  ];

  return (
    // <DownLoadContext.Consumer>
    //     {
    //         ({ download, setDownload }) => {
    //             return (
    //                 <View style={styles.container}>
    //                     <OptionItem item={options[0]} onPressListItem={(item) => {

    //                     }} />
    //                     <OptionItem item={options[1]} onPressListItem={(item) => {

    //                     }} />
    //                     <OptionItem item={options[2]} onPressListItem={(item) => {
    //                         download.push(value);
    //                         setDownload(download);
    //                     }} />
    //                 </View>
    //             )
    //         }
    //     }
    // </DownLoadContext.Consumer>
    <View style={styles.container}>
      <OptionItem item={options[0]} onPressListItem={(item) => {}} />
      <OptionItem item={options[1]} onPressListItem={(item) => {}} />
      <OptionItem item={options[2]} onPressListItem={(item) => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListOption;
