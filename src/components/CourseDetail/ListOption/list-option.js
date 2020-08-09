import React from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import OptionItem from "./option-item";
import { connect } from "react-redux";
import loGet from "lodash/get";
import UserActions from "../../../redux/userRedux";
import CourseActions from "../../../redux/courseRedux";
import { ICONFAVORITE, ICONDOWNLOAD, ICONPAYMENT } from "../../../config/icon";
import { stringify } from "querystring";
import { WebView } from "react-native-webview";

const ListOption = (props) => {
  let { item = {}, likeCourse, joinCourse } = props;
  const options = [
    {
      id: 1,
      imageRoute: ICONFAVORITE,
      title: "Favorite",
    },
    {
      id: 2,
      imageRoute: ICONDOWNLOAD,
      title: "Download",
    },
    {
      id: 3,
      imageRoute: ICONPAYMENT,
      title: item.price === 0 ? "Joining" : "Paying",
    },
  ];

  const onPressListItem = (optionItem) => {
    if (optionItem.id === 1) {
      const params = {
        courseId: item.id,
      };
      likeCourse(params);
    } else if (optionItem.id === 2) {
    } else if (optionItem.id === 3) {
      if (item.price === 0) {
        const params = {
          courseId: item.id,
        };
        joinCourse(params);
      } else {
        return (
          <Modal>
            <WebView
              source={{
                uri: "https://github.com/facebook/react-native",
              }}
              style={{ marginTop: 20 }}
            />
          </Modal>
        );
      }
    }
  };

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
      <OptionItem optionItem={options[0]} onPressListItem={onPressListItem} />
      <OptionItem optionItem={options[1]} onPressListItem={onPressListItem} />
      <OptionItem optionItem={options[2]} onPressListItem={onPressListItem} />
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
  joinCourse: (params, actionSuccess) =>
    dispatch(CourseActions.paymentCourseRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListOption);
