// import * as React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   FlatList,
//   ActivityIndicator,
//   Platform,
// } from 'react-native';
// import { SearchBar } from 'react-native-elements';

// export default class SearchCourses extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoading: true, search: '' };
//     this.arrayholder = [];
//   }
//   componentDidMount() {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(responseJson => {
//         this.setState(
//           {
//             isLoading: false,
//             dataSource: responseJson,
//           },
//           function () {
//             this.arrayholder = responseJson;
//           }
//         );
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   search = text => {
//     console.log(text);
//   };
//   clear = () => {
//     this.search.clear();
//   };

//   SearchFilterFunction(text) {
//     //passing the inserted text in textinput
//     const newData = this.arrayholder.filter(function (item) {
//       //applying filter for the inserted text in search bar
//       const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
//       const textData = text.toUpperCase();
//       return itemData.indexOf(textData) > -1;
//     });

//     this.setState({
//       //setting the filtered newData on datasource
//       //After setting the data it will automatically re-render the view
//       dataSource: newData,
//       search: text,
//     });
//   }

//   ListViewItemSeparator = () => {
//     //Item sparator view
//     return (
//       <View
//         style={{
//           height: 0.3,
//           width: '90%',
//           backgroundColor: '#080808',
//         }}
//       />
//     );
//   };

//   render() {
//     if (this.state.isLoading) {
//       //Loading View while data is loading
//       return (
//         <View style={{ flex: 1, paddingTop: 20 }}>
//           <ActivityIndicator />
//         </View>
//       );
//     }
//     return (
//       //ListView to show with textinput used as search bar
//       <View style={styles.viewStyle}>
//         <SearchBar
//           round
//           lightTheme
//           searchIcon={{ size: 24 }}
//           onChangeText={text => this.SearchFilterFunction(text)}
//           onClear={text => this.SearchFilterFunction('')}
//           placeholder="Type Here..."
//           value={this.state.search}
//         />
//         <FlatList
//           data={this.state.dataSource}
//           ItemSeparatorComponent={this.ListViewItemSeparator}
//           //Item Separator View
//           renderItem={({ item }) => (
//             // Single Comes here which will be repeatative for the FlatListItems
//             <Text style={styles.textStyle}>{item.title}</Text>
//           )}
//           enableEmptySections={true}
//           style={{ marginTop: 10 }}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop: Platform.OS == 'ios' ? 50 : 0,
//   },
//   textStyle: {
//     padding: 10,
//   },
// });

import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { searchCourses } from '../../../globals/courses'
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';

const SearchCourse = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [arrayholder, setArrayHolder] = useState(searchCourses);
  const [dataSource, setDataSource] = useState([]);

  const onPressListItem = (item) => {
    props.navigation.navigate("CourseDetail", { item })
  }

  const FlatListItemSeparator = () => {
    return (
      <View style={styles.separator}></View>
    )
  }

  const searchFilter = (text) => {
    const newData = arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setDataSource(newData);
    setSearch(text);

  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
      </View>
    )
  }
  return (
    <View style={styles.viewStyle}>
      <SearchBar
        round
        lightTheme
        searchIcon={{ size: 24 }}
        onChangeText={text => searchFilter(text)}
        onClear={text => searchFilter('')}
        placeholder="Type Here..."
        value={search}
      />
      <FlatList
        data={dataSource}
        renderItem={({ item }) => <ListCoursesItem item={item} navigation={props.navigation} onPressListItem={onPressListItem} />}
        ItemSeparatorComponent={FlatListItemSeparator}
        enableEmptySections={true}
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 50 : 0,
  },
  textStyle: {
    padding: 10,
  },
  separator: {
    height: 0.5,
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default SearchCourse;

