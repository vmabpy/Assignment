import React from "react";
import { View, Text, StyleSheet, SectionList, Alert } from "react-native";
import { padding } from "../../../globals/constants";
import ListLessonItem from "../ListLessonItem/list-lesson-item";

const ListLesson = (props) => {
  const { data = [], ownCourse } = props;
  const dataList = data.map((item) => ({
    id: item.id,
    courseId: item.courseId,
    numberOrder: item.numberOrder,
    title: item.name,
    isDeleted: item.isDeleted,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    data: item.lesson,
    sumHours: item.sumHours,
    sumLessonFinish: item.sumLessonFinish,
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
          <ListLessonItem
            item={item}
            handleClick={props.handleClick}
            ownCourse={ownCourse}
          />
        )}
        renderSectionHeader={({
          section: { title, index, sumHours, sumLessonFinish },
        }) => {
          return (
            <View style={styles.header}>
              <View style={styles.viewNumber}>
                <Text style={styles.titleNumber}>{index + 1}</Text>
              </View>
              <View style={styles.restView}>
                <Text style={styles.titleSection}>{title}</Text>
                <View style={styles.perView}>
                  <Text>{sumLessonFinish}/</Text>
                  <Text style={{ color: "blue", fontWeight: "bold" }}>
                    {sumHours}
                  </Text>
                </View>
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
    backgroundColor: "gray",
  },
  header: {
    flex: 1,
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
  restView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  perView: {
    flexDirection: "row",
    padding: 10,
  },
  titleSection: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ListLesson;
