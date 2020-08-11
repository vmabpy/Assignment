import React, { useState } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  TouchableHighlight,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { ICONCLOSE, ICONHOMEWORK, ICONEXERCISE } from "../../../config/icon";

const ModalExercises = (props) => {
  const { itemLesson = {}, modalVisible, handleModalVisible } = props;
  const [execises, setExercise] = useState([{}]);
  return (
    <View style={{ ...styles.centeredView }}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
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
              <Text style={styles.modalText}>Exercises</Text>
              <TouchableOpacity
                onPress={handleModalVisible}
                style={{ zIndex: 99, position: "absolute", right: 20 }}
              >
                <Image source={ICONCLOSE} style={{ height: 10, width: 10 }} />
              </TouchableOpacity>
            </View>
            <View style={styles.viewRest}>
              {execises.length === 0 ? (
                <View style={styles.viewCenter}>
                  <Image source={ICONEXERCISE} style={styles.image} />
                  <Text>No exercises right now. Come back later.</Text>
                </View>
              ) : (
                <View>
                  <View style={styles.viewCenter}>
                    <Image source={ICONHOMEWORK} style={styles.image} />
                    <Text>
                      Answer some multiple questions created by the author.
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Start</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
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
    justifyContent: "center",
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
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 4,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontWeight: "500",
  },
});
