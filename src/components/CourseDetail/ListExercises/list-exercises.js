import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import ListExercisesItem from "./list-exercises-item";
import WebView from "react-native-webview";
import HTML from "react-native-render-html";
import { dimension } from "../../../globals/dimension";

const ListExercises = (props) => {
  const { data = [] } = props;
  const dataExercise = data.map((item) => ({
    id: item.id,
    title: item.content,
    isMultipleChoice: item.isMultipleChoice,
    contentHtml: item.contentHtml,
    data: item.exercises_answers,
  }));

  const FlatListItemSeparator = () => {
    return <View style={styles.separator}></View>;
  };

  return (
    <View>
      <SectionList
        SectionSeparatorComponent={FlatListItemSeparator}
        stickySectionHeadersEnabled={true}
        sections={dataExercise.map((item, index) => ({ ...item, index }))}
        renderItem={({ item }) => <ListExercisesItem item={item} />}
        renderSectionHeader={({ section: { contentHtml, index } }) => {
          return (
            <View style={styles.header}>
              <View style={styles.viewNumber}>
                <Text style={styles.titleNumber}>{index + 1}</Text>
              </View>
              <View style={styles.webview}>
                <HTML html={contentHtml} imagesMaxWidth={dimension.width} />
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
    margin: 5,
    height: 100,
    width: 100,
  },
  separator: {
    margin: 10,
    height: 0.5,
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
  webview: {
    marginHorizontal: 5,
  },
});

export default ListExercises;
