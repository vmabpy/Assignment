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
                <Text style={styles.titleNumber}>{index}</Text>
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
    height: 0.5,
    width: "100%",
    backgroundColor: "gray",
  },
  header: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  viewNumber: {
    height: 50,
    width: 100,
    backgroundColor: "darkgray",
    alignItems: "center",
    justifyContent: "center",
  },
  titleNumber: {
    alignSelf: "center",
    color: "white",
  },
  titleSection: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ListLesson;
