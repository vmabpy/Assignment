import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Main/Home/home';
import Login from './src/components/Authentication/Login/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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
