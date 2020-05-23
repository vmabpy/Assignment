import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Home from './src/components/Main/Home/home';
import Login from './src/components/Authentication/Login/login';
import ImageButton from './src/components/Common/image-button';
import ListCourses from './src/components/Courses/ListCourses/list-courses';
import Download from './src/components/Main/Download/download';
import Browse from './src/components/Main/Browse/browse';
import SearchCourses from './src/components/Main/SearchCourses/search-courses';
import CourseDetail from './src/components/CourseDetail/course-detail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationName } from './src/globals/constants'
import { headerStyle } from './src/globals/styles'
import { colorConst } from './src/globals/constants'
import Splash from './src/components/Authentication/Splash/splash';
import Register from './src/components/Authentication/Register/register';
import Profile from './src/AccountManagement/Account/profile';
import Ionicons from '@expo/vector-icons/Ionicons'

const Stack = createStackNavigator()
const ListCoursesStack = () => {
  return (
    <Stack.Navigator initialRouteName="ListCourses" screenOptions={{
      headerStyle: {
        backgroundColor: colorConst.colorHeader,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    // mode="modal"
    >
      <Stack.Screen name={navigationName.ListCourse} component={ListCourses} options={{
        title: 'List Course',
        headerRight: () => (
          <Button
            onPress={() => Alert.alert('Setting', 'This is the setting screens')}
            title="Info"
            color="#fff"
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

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="CourseDetail" component={CourseDetail} />
    <HomeStack.Screen name="Profile" component={Profile} />
  </HomeStack.Navigator>
)

const BrowseStack = createStackNavigator();
const BrowseStackScreen = () => (
  <BrowseStack.Navigator>
    <BrowseStack.Screen name="Browse" component={Browse} />
    <BrowseStack.Screen name="CourseDetail" component={CourseDetail} />
  </BrowseStack.Navigator>
)

const DownloadStack = createStackNavigator();
const DownloadStackScreen = () => (
  <DownloadStack.Navigator>
    <DownloadStack.Screen name="Download" component={Download} />
    <DownloadStack.Screen name="CourseDetail" component={CourseDetail} />
  </DownloadStack.Navigator>
)

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={Login} options={{ title: "Sign In", headerShown: false }} />
    <AuthStack.Screen name="Register" component={Register} options={{ title: "Register", headerShown: false }} />
  </AuthStack.Navigator>
)


const Tab = createBottomTabNavigator()
const TabBottomScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeApp') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === "DownloadApp") {
          iconName = 'ios-download';
        } else if (route.name === "BrowseApp") {
          iconName = 'ios-browsers';
        } else if (route.name === 'Search') {
          iconName = 'ios-search';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;

      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >

    <Tab.Screen name="HomeApp" component={HomeStackScreen} options={{ title: 'Home' }} />
    {/* <Tab.Screen name="ListCourses" component={ListCoursesStack} options={{ title: "Explorer" }} /> */}
    <Tab.Screen name="DownloadApp" component={DownloadStackScreen} options={{ title: 'Download' }} />
    <Tab.Screen name="BrowseApp" component={BrowseStackScreen} options={{ title: 'Browse' }} />
    {/* <Tab.Screen name="Profile" component={Profile} /> */}
    <Tab.Screen name="Search" component={SearchCourses} options={{
      headerShown: false,
    }} />

  </Tab.Navigator>
)

const MainStack = createStackNavigator()
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="MainAuth" component={AuthStackScreen} options={{ headerShown: false }} />
    <MainStack.Screen name="MainApp" component={TabBottomScreen} options={{ headerShown: false }} />
    <MainStack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
  </MainStack.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});
