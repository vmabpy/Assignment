import React from "react";
import { View, Text, StyleSheet, SectionList, Alert } from "react-native";
import { padding } from "../../../globals/constants";
import ListLessonItem from "../ListLessonItem/list-lesson-item";

const ListLesson = (props) => {
  const { data = [] } = props;
  const dataList = data.map((item) => ({
    id: item.id,
    courseId: item.courseId,
    numberOrder: item.numberOrder,
    title: item.name,
    isDeleted: item.isDeleted,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    data: item.lesson,
  }));

  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <View>
      <SectionList
        SectionSeparatorComponent={FlatListItemSeparator}
        sections={dataList.map((item, index) => ({ ...item, index }))}
        // sections={dataList}
        renderItem={({ item }) => (
          <ListLessonItem item={item} handleClick={props.handleClick} />
        )}
        renderSectionHeader={({ section: { title, index } }) => {
          return (
            <View style={styles.header}>
              <View style={styles.viewNumber}>
                <Text style={styles.titleNumber}>{index + 1}</Text>
              </View>
              <View>
                <Text style={styles.titleSection}>{title}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionitem: {
    margin: padding._5,
    height: 100,
    width: 100,
  },
  separator: {
    margin: 10,
    height: 0.5,
    // width: "90%",
    backgroundColor: "gray",
  },
  header: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  viewNumber: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "darkgray",
    borderWidth: 2,
  },
  titleNumber: {
    alignSelf: "center",
    color: "black",
  },
  titleSection: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ListLesson;
