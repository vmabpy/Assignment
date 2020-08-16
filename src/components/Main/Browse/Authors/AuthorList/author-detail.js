import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ListCoursesItem from "../../../../Courses/ListCoursesItem/list-courses-item";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../../../redux/courseRedux";
import I18n from "ex-react-native-i18n";

const ListAuthorDetail = (props) => {
  const {
    route: { params },
    getDataTutorDetail,
  } = props;
  let item = params ? params.item : {};
  const idTutor = item ? item.id : undefined;

  props.navigation.setOptions({ title: I18n.t("key_author") });
  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item });
  };

  const [dataTutor, setDataTutor] = useState(undefined);
  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  useEffect(() => {
    if (idTutor) {
      const params = { idTutor };
      getDataTutorDetail(params, (res) => {
        setDataTutor(res);
      });
    }
  }, [getDataTutorDetail]);

  return dataTutor ? (
    <View style={{ flex: 1 }}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <Image source={{ uri: dataTutor.avatar }} style={styles.image} />
        <Text style={styles.name}>{dataTutor.name}</Text>
        <Text style={styles.titleName}>{dataTutor.major}</Text>
      </View>
      <FlatListItemSeparator />

      <View style={{ margin: 5, height: 30, justifyContent: "center" }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {I18n.t("key_courses")}
        </Text>
      </View>
      <FlatListItemSeparator />
      <FlatList
        data={dataTutor.courses}
        renderItem={({ item }) => (
          <ListCoursesItem
            item={item}
            navigation={props.navigation}
            onPressListItem={onPressListItem}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={FlatListItemSeparator}
      />
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 50,
  },
  name: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  titleName: {
    marginTop: 5,
    color: "darkgray",
    fontSize: 16,
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#E7E8E8",
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchTopProps = (dispatch) => ({
  getDataTutorDetail: (params, actionSuccess) =>
    dispatch(CourseActions.getTutorDetailRequest(params, actionSuccess)),
});
export default connect(mapStateToProps, mapDispatchTopProps)(ListAuthorDetail);
