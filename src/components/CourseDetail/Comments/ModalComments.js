import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from "react-native";
import Constants from "expo-constants";
import { ICONCLOSE } from "../../../config/icon";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../redux/courseRedux";
import CommentItem from "./comment-item";
import StarRating from "react-native-star-rating";
import Button from "../../../components/Common/button";

const ModalComments = (props) => {
  const {
    ownCourse,
    dataComments = {},
    modalVisibleComments,
    handleModalVisibleComments,
  } = props;

  const [value, onChangeText] = useState("");
  const [pointContent, setPointContent] = useState(0);
  const [pointFormal, setPointFormal] = useState(0);
  const [pointPre, setPointPre] = useState(0);

  const ratingFolmal = (rating) => {
    setPointFormal(rating);
  };

  const ratingContent = (rating) => {
    setPointContent(rating);
  };

  const ratingPre = (rating) => {
    setPointPre(rating);
  };

  const handleComment = () => {
    const params = {
      courseId: dataComments.id,
      formalityPoint: pointFormal,
      contentPoint: pointContent,
      presentationPoint: pointPre,
      content: value,
    };
    console.log(params, "comment");
  };
  return (
    <View style={{ ...styles.centeredView }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleComments}
      >
        <View
          style={{
            ...styles.centeredView,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#EFF0F5",
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.viewHeader}>
              <Text style={styles.modalText}>Comments</Text>
              <TouchableOpacity
                onPress={handleModalVisibleComments}
                style={{ zIndex: 99, position: "absolute", right: 20 }}
              >
                <Image source={ICONCLOSE} style={{ height: 10, width: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.viewRest}>
              <ScrollView style={{ flex: 1 }}>
                <FlatList
                  data={dataComments.ratings.ratingList}
                  renderItem={({ item }) => <CommentItem item={item} />}
                />
                {ownCourse && (
                  <View style={styles.viewPoint}>
                    <Text style={styles.title}>Comment</Text>
                    <View style={styles.pointView}>
                      <Text style={styles.titlePoint}>Content</Text>
                      <StarRating
                        disabled={false}
                        emptyStar={"ios-star-outline"}
                        fullStar={"ios-star"}
                        halfStar={"ios-star-half"}
                        iconSet={"Ionicons"}
                        maxStars={5}
                        rating={pointContent}
                        fullStarColor={"#FADB13"}
                        starSize={20}
                        containerStyle={{ flex: 0.5, marginRight: 15 }}
                        selectedStar={(rating) => ratingContent(rating)}
                      />
                    </View>
                    <View style={styles.pointView}>
                      <Text style={styles.titlePoint}>Formality</Text>
                      <StarRating
                        disabled={false}
                        emptyStar={"ios-star-outline"}
                        fullStar={"ios-star"}
                        halfStar={"ios-star-half"}
                        iconSet={"Ionicons"}
                        maxStars={5}
                        rating={pointFormal}
                        fullStarColor={"#FADB13"}
                        starSize={20}
                        containerStyle={{ flex: 0.5, marginRight: 15 }}
                        selectedStar={(rating) => ratingFolmal(rating)}
                      />
                    </View>
                    <View style={styles.pointView}>
                      <Text style={styles.titlePoint}>Presentation</Text>
                      <StarRating
                        disabled={false}
                        emptyStar={"ios-star-outline"}
                        fullStar={"ios-star"}
                        halfStar={"ios-star-half"}
                        iconSet={"Ionicons"}
                        maxStars={5}
                        rating={pointPre}
                        fullStarColor={"#FADB13"}
                        starSize={20}
                        containerStyle={{ flex: 0.5, marginRight: 15 }}
                        selectedStar={(rating) => ratingPre(rating)}
                      />
                    </View>
                    <View style={styles.viewTextInput}>
                      <TextInput
                        height={50}
                        multiline
                        numberOfLines={4}
                        editable
                        placeholder={"Give the comments"}
                        onChangeText={(text) => onChangeText(text)}
                        value={value}
                      />
                    </View>
                    <View style={styles.viewBtn}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={handleComment}
                      >
                        <Text style={styles.text}>Comment</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    marginTop: 100,
  },
  modalView: {
    flex: 1,
    flexDirection: "column",
    position: "relative",
  },
  viewHeader: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: "#EFF0F5",
  },
  viewRest: {
    flex: 1,
  },
  viewCenter: {
    padding: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 5,
  },
  modalText: {
    fontWeight: "bold",
    textAlign: "right",
  },
  button: {
    backgroundColor: "#4EAFE9",
    borderRadius: 4,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
  title: {
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 10,
  },
  titlePoint: {
    fontSize: 14,
    flex: 0.5,
  },
  viewPoint: {
    flex: 1,
    // backgroundColor: "yellow",
    margin: 10,
    borderColor: "rgba(0, 0, 0, 0.04)",
    borderWidth: 2,
    borderRadius: 14,
    padding: 10,
  },
  pointView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 5,
  },
  viewTextInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  viewBtn: {
    alignSelf: "flex-end",
    marginRight: 15,
    marginBottom: 5,
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchTopProps)(ModalComments);
