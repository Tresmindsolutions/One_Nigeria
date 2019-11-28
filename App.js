import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
// import DashboardHome from './src/Screens/DashboardHome';
import SplashScreen from "./src/screens/SplashScreen";
import StackNavigator from "./src/screens/StackNavigator";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }
    return <StackNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
