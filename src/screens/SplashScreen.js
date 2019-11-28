import React from "react";
import { View, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import { theme, FontColor } from "../components/Constant/theme";

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
  }

  componentWillMount() {
    this.spring();
  }

  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  }
  render() {
    return (
      <LinearGradient
        colors={["#F9F9F9", "#F1F1F1", "#FFFFFF"]}
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1
        }}
      >
        {/* <View
                style={{
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#F1F1F1",

                }}
            > */}
        <Animated.Image
          style={{
            width: "80%",
            height: 200,
            resizeMode: "contain",
            transform: [{ scale: this.springValue }]
          }}
          source={require("../../assets/images/logo.png")}
        />
        {/* </View> */}
      </LinearGradient>
    );
  }
}
