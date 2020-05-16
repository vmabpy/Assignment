import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import 'react-native-gesture-handler';
import Home from './src/components/Main/Home/home';
import Login from './src/components/Authentication/Login/login';
import ImageButton from './src/components/Common/image-button';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import Download from './src/components/Main/Download/download';
import Browse from './src/components/Main/Browse/browse';
import SearchCourses from './src/components/Main/SearchCourses/search-courses';
import CourseDetail from './src/components/CourseDetail/course-detail';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {navigationName} from './src/globals/constants'
import {headerStyle} from './src/globals/styles'
import {colorConst} from './src/globals/constants'
const Stack = createStackNavigator()

const ListCoursesStack = () => {
  return(
<Stack.Navigator initialRouteName = "ListCourses" screenOptions = {{
      headerStyle: {
        backgroundColor: colorConst.colorHeader,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
}} mode = "modal"
      >
        <Stack.Screen name = {navigationName.ListCourse} component = {ListCourses} options = {{
      title: 'List Course',
      headerRight: () => (
        <Button
          onPress={() => Alert.alert('Setting', 'This is the setting screens')}
          title = "Info"
          color = "#fff"
        />
      ),
      }} 
      />
      <Stack.Screen name="CourseDetail" component={CourseDetail} options={
        // ({route}) => {
        //   return {title: route.params.item.title}
        // }
        {
          title: "Course Detail",
          headerShown: false,
        }
      } />
      </Stack.Navigator>
  )
}

const ListCoursesScreen = () => {
  
}

const DetailCourseScreen = () => {
  
}
// const HomeStack  = () => {
//   return(
//     <Stack.Screen>
//         <ListCoursesStack />
//         <DetailCourseScreen />

//     </Stack.Screen>
//   )
// }




const Tab = createBottomTabNavigator()


export default function App() {
  
  return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name = "Home" component={Home} />
        <Tab.Screen name = "ListCourses" component = {ListCoursesStack}/>
        <Tab.Screen name = "Download" component={Download} />
        <Tab.Screen name = "Browse" component={Browse} />
        <Tab.Screen name = "Search" component={SearchCourses} options = {{
          headerShown: false,
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <SearchCourses /> */}
    //   {/* <Browse /> */}
    //   {/* <Download /> */}
    //   {/* <ListCourses /> */}
    //   {/* <Home /> */}
    //   {/* <Login /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,    
  },
});
