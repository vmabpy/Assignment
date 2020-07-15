import React from "react";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import SectionCourses from "./SectionCourses/section-courses";
import ImageButton from "../../Common/image-button";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  coursesSoftware,
  courseData,
  courseSecurity,
  coursesOperations,
} from "../../../globals/courses";
const Home = (props) => {
  const item = props.route.params.status;
  console.log(props, "Home");
  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Profile", { item });
        }}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../../../assets/ic_profile.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    ),
  });

  return (
    <ScrollView>
      <SectionCourses
        title="Software development"
        courses={coursesSoftware}
        navigation={props.navigation}
      />
      <SectionCourses
        title="IT Operations"
        courses={coursesOperations}
        navigation={props.navigation}
      />
      <SectionCourses
        title="Data professional"
        courses={courseData}
        navigation={props.navigation}
      />
      <SectionCourses
        title="Security professional"
        courses={courseSecurity}
        navigation={props.navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

export default Home;
