// /*This is an Example of SearchBar in React Native*/
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
//     //setting default state
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
//           function() {
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
//     const newData = this.arrayholder.filter(function(item) {
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
//           marginLeft: 5,
//           height: 0.3,
//           width: '95%',
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
//     marginTop: Platform.OS == 'ios' ? 30 : 0,
//   },
//   textStyle: {
//     padding: 10,
//   },
// });


import React, { useEffect, useState } from 'react'
import { View, FlatList, ActivityIndicator, StyleSheet, TextInput } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import _ from 'lodash'

export default class SearchCourses extends React.Component {

  state = {
    data: [],
    fullData: [],
    loading: false,
    error: null,
    query: "",
  }

  componentDidMount() {
    this.requestAPIPhotos()
  }

  requestAPIPhotos = _.debounce(() => {
    this.setState({ loading: true })
    const apiURL = "https://jsonplaceholder.typicode.com/photos?"
    fetch(apiURL).then((res) => res.json())
      .then((resJson) => {
        this.setState({
          loading: false,
          data: resJson,
          fullData: resJson
        })
      }).catch(error => {
        this.setState({ error, loading: false })
      })

  }, 250)

  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        title={item.albumId}
        subtitle={item.title}
        bottomDivider
      />
    )
  }

  handleSearch = (text) => {
    const formattedQuerry = text.toLowerCase()
    const data = _.filter(this.state.fullData, item => {
      if (item.title.includes(formattedQuerry)) {
        return true
      }
      return false
    })
    this.setState({ data, query: text })
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator animating size="large" />
        </View>
      )
    }
    return (
      <View>
        <SearchBar
          round
          lightTheme
          placeholder="Search"
          onChangeText={this.handleSearch}
        />
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS == 'ios' ? 30 : 0,
  },
  loading: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#CED0CE',
  },
})


// const SearchCourses = (props) => {
//   const [data, setData] = useState([]);
//   const [fullData, setFullData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [query, setQuery] = useState("");


//   useEffect(() => {
//     setLoading(true)
//     const apiURL = "https://jsonplaceholder.typicode.com/photos?"
//     fetch(apiURL)
//       .then(res => res.json())
//       .then(resJson => {
//         setLoading(false);
//         setData(resJson);
//         setFullData(resJson);
//       }).catch(error => {
//         setError(error);
//         setLoading(false);
//       })
//   }, []);

//   const renderItem = ({ item, index }) => {
//     return (
//       <ListItem
//         title={item.albumId}
//         subtitle={item.title}
//         bottomDivider
//       />
//     )
//   }

//   const handleSearch = (text) => {
//     const formattedQuerry = text.toLowerCase()
//     const data = _.filter(fullData, item => {
//       if (item.title.includes(formattedQuerry)) {
//         return true
//       }
//       return false
//     })
//     setData(data);
//     setQuery(text);
//   }

//   if (loading) {
//     return (
//       <View style={styles.loading}>
//         <ActivityIndicator animating size="large" />
//       </View>
//     )
//   }
//   return (
//     <View>
//       <SearchBar
//         round
//         lightTheme
//         placeholder="Search"
//         onChangeText={handleSearch}
//       />
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//       />
//     </View>
//   )
// }



// export default SearchCourses;