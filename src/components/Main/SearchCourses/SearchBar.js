import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import debounce from "lodash/debounce";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { GRAY, BLACK } from "../../../config/color";
import { useNavigation } from "@react-navigation/native";
import { defaultFormatUtc } from "moment";

const SearchBar = (props) => {
  const [text, setText] = useState("");
  const textInput = useRef(null);

  const handleOnPressClearText = () => {
    setText("");
  };
  const debounceSearchDoctors = debounce(
    (value) => props.search({ keyword: value, limit: 20, offset: 0 }),
    500
  );
  const searchCourses = (_text) => {
    setText(_text);
    debounceSearchDoctors(_text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          ref={textInput}
          style={styles.input}
          onChangeText={searchCourses}
          defaultValue={text}
          placeholder="Seach course ..."
        />
        {text !== "" && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleOnPressClearText}
          >
            <MaterialIcons name="clear" size={24} color={BLACK} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: GRAY,
    borderBottomWidth: 0.5,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.04)",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  input: {
    fontSize: 14,
    lineHeight: 16,
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
});

export default SearchBar;
