import React from "react";
import { View, Text, StyleSheet } from "react-native";
import OptionItem from "./option-item";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
const ListOption = (props) => {
  let { item = {}, likeCourse } = props;
  const options = [
    {
      id: 1,
      imageRoute: require("../../../../assets/ic_bookmark.png"),
      title: "Favorite",
    },
    {
      id: 2,
      imageRoute: require("../../../../assets/ic_channel.png"),
      title: "Share",
    },
    {
      id: 3,
      imageRoute: require("../../../../assets/ic_download.png"),
      title: "Download",
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
      <OptionItem
        item={options[0]}
        onPressListItem={() => {
          const params = {
            courseId: item.id,
          };
          likeCourse(params);
        }}
      />
      <OptionItem item={options[1]} onPressListItem={() => {}} />
      <OptionItem item={options[2]} onPressListItem={() => {}} />
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

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  likeCourse: (params, actionSuccess) =>
    dispatch(UserActions.likeCourseRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListOption);
