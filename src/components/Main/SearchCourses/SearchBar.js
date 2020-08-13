import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import debounce from "lodash/debounce";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { GRAY, BLACK } from "../../../config/color";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import loGet from "lodash/get";

const SearchBar = (props) => {
  const [text, setText] = useState("");
  const textInput = useRef(null);
  const { tokenSave, updateData, useFor, search } = props;
  const [data, setData] = useState({});

  const handleOnPressClearText = () => {
    setText("");
  };
  const debounceSearchCourses = debounce(
    (value) =>
      search(
        {
          token: tokenSave,
          keyword: value,
          limit: props.limit,
          offset: props.offset,
        },
        (res) => {
          setData(res);
          if (useFor) {
            updateData(res.courses);
          } else {
            updateData(res.instructors);
          }
        }
      ),
    500
  );
  const searchCourses = (_text) => {
    setText(_text);
    debounceSearchCourses(_text);
  };

  useEffect(() => {
    if (useFor) {
      updateData(data.courses);
    } else {
      updateData(data.instructors);
    }
  }, [useFor]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-search"
          size="18"
          color="gray"
        />
        <TextInput
          ref={textInput}
          style={styles.input}
          onChangeText={searchCourses}
          defaultValue={text}
          placeholder="Seach ..."
          autoFocus={true}
        />
        {text !== "" && (
          <TouchableOpacity
            style={styles.button}
            onPress={handleOnPressClearText}
          >
            <MaterialIcons name="clear" size={18} color="gray" />
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
    paddingLeft: 5,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
  button: {
    marginRight: 5,
  },
});

//get data
const mapStateToProps = (state) => ({
  tokenSave: loGet(state, ["user", "token"]),
});

//call api to get response
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
