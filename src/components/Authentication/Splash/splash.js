import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { ICONAPP } from "../../../config/icon";
import { ThemeContext, themes } from "../../../../App";
import { connect } from "react-redux";
import AppActions from "../../../redux/appRedux";
/*
    const Splash = (props) => {
        const  [loading, setLoading] = useState(0)

        useEffect(() => {
            this.timer = setInterval(() => {
                setLoading(loading+1)
            })

            //function below is like willUmMout
            return() => {
                clearInterval(this.timer)
            }
        }, []) // <--- empty array [] <- componentDidMount
  
        userEffect(() => {
            // business
        }, [loading])

        return (
            <View style={styles.container}>
                <Text>Loading...{`${this.state.loading}`}</Text>
            </View>
        )
    }
        
*/

// class SplashScreen extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { loading: 0 };
//     console.log("constructor");
//     console.log("context data: ", this.context);
//   }
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("componentDidMount");
//       const newLoadingValue = this.state.loading + 1;
//       this.setState({ loading: newLoadingValue });
//     }, 50);
//   }

//   // shouldComponentUpdate() {
//   //     console.log('shouldComponentUpdate')
//   // }

//   componentDidUpdate() {
//     //preProps, preState
//     console.log("componentDidUpdate");
//     if (this.state.loading >= 50) {
//       clearInterval(this.timer);
//       this.props.navigation.navigate("MainAuth");
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image source={ICONAPP} style={styles.image} />
//       </View>
//     );
//   }
// }
// Splash.contextType = ThemeContext;

const SplashScreen = (props) => {
  useEffect(() => {
    const { startUp } = props;
    const timmer = setTimeout(() => {
      startUp();
    }, 2000);
    return () => clearTimeout(timmer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Image source={ICONAPP} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: 200,
  },
});

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  startUp: (actionSuccess, actionFalure) =>
    dispatch(AppActions.startupRequest(actionSuccess, actionFalure)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
