import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./Login";
import Signup from "./Signup";
import SocialHub from "./SocialHub"

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup: {
      screen: Signup,
      navigationOptions: () => ({
        header: null
      })
    },
  SocialHub: {
      screen: SocialHub,
      navigationOptions: () => ({
        header: null
      })
    }
  },

  {
    // initialRouteName: "Login"
    // initialRouteName: "Signup"
    initialRouteName: "SocialHub"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class StackNavigator extends Component {
  render() {
    return <AppContainer />;
  }
}
