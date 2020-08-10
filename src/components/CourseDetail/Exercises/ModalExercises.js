import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Text,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";
import { ICONCLOSE } from "../../../config/icon";

const ModalExercises = (props) => {
  const { itemLesson = {}, modalVisible, handleModalVisible } = props;
  const [execises, setExercise] = useState([]);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Exercises</Text>
            <TouchableHighlight
              onPress={handleModalVisible}
              style={{ zIndex: 99, position: "absolute", right: 20 }}
            >
              <Image source={ICONCLOSE} style={{ height: 10, width: 10 }} />
            </TouchableHighlight>
            {execises.length === 0 ? <View></View> : <View></View>}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalExercises;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#C6C6C6",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalView: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  modalText: {
    fontWeight: "bold",
    textAlign: "right",
  },
});
