import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import CategoriesItem from "../CategoriesItem/CategoriesItem";
import { connect } from "react-redux";
import loGet from "lodash/get";
import CourseActions from "../../../../redux/courseRedux";

const Categories = (props) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Profile");
        }}
      >
        <View style={{ marginRight: 20 }}>
          <Image
            source={require("../../../../../assets/ic_profile.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
    ),
  });

  useEffect(() => {
    props.getCategories((categories) => {
      setData(categories);
    });
  }, []);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    props.getCategories((categories) => {
      setData(categories);
    });
    setRefreshing(false);
  }, [refreshing]);

  const handlePress = (item) => {
    props.navigation.navigate("Courses", { item });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CategoriesItem
            handlePress={() => handlePress(item)}
            title={item.name}
          />
        )}
        keyExtractor={(item) => `CATEGORY_${item.id}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
});

const mapStateToProps = (state) => ({
  data: loGet(state, ["course", "categories"], []),
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: (actionSuccess) =>
    dispatch(CourseActions.getCategoriesRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
