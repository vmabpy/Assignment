import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import Login from './src/components/Authentication/Login/login';
import ImageButton from './src/components/Common/image-button';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import Download from './src/components/Main/Download/download';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Download />
      {/* <ListCourses /> */}
      {/* <Home /> */}
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,    
  },
});
