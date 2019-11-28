import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  BackHandler,
  Animated,
  Easing,
  Dimensions,
  Alert
} from "react-native";

import { Header, Body, Left, Right, Button } from "native-base";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import CountryPickerComponent from "../Screens/CountryPickerComponent";
import CurrencyPicker3Component from "../Screens/CurrencyPicker3Component";
import { ScrollView } from "react-native-gesture-handler";
import BottomSheet from "../../src/Screens/countrybottomsheet";

import * as Animatable from "react-native-animatable";
const sideOut = {
  from: {
    height: 0
  },
  to: {
    height: 120
  }
};
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      fadeAnim: new Animated.Value(0),
      openDropDown: false
    };
  }

  changeLocation = (flag, name) => {
    this.setState({
      countryName: name,
      countryFlag: flag,
      openDropDown: false
    });
  };

  change = () => {
    this.setState({
      openDropDown: !this.state.openDropDown
    });
  };

  onchange = () => {
    this.props.change(this.state.openDropDown);
  };

  render() {
    console.log(this.props.ReduxData);

    return (
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "#fff",
          alignItems: "center",
          elevation: 0,
          height: 65,
          // zIndex: 200,
          // position: "absolute",
          borderBottomColor: "transparent"
        }}
      >
        {this.props.left ? (
          <Left
            style={{
              flex: 1,
              marginLeft: 5
            }}
          >
            <View
              style={{
                width: 35,
                height: "100%",
                justifyContent: "center"
              }}
            >
              {this.props.backArrow === true ? (
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}
                >
                  <Ionicons
                    name={"ios-arrow-back"}
                    style={{ fontSize: 28, color: "#e8041d" }}
                  />
                </TouchableOpacity>
              ) : this.props.countryImg === true ? (
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    // flex: 1,
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      width: 35,
                      height: 35,
                      borderWidth: 0,
                      justifyContent: "center",
                      overflow: "hidden",
                      borderRadius: 25,
                      marginTop: 15,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.18,
                      shadowRadius: 1.00,

                      elevation: 1,
                    }}
                    onPress={() => {
                      this.props.onchange();
                    }}
                  >
                    <Image
                      source={{ uri: this.props.item.country_flag  }}
                      resizeMode="cover"
                      // resizeMode="contain"
                      style={{ height: 55, width: "100%" }}
                    />
                  </TouchableOpacity>
                  {this.props.isLocationPicker ? (
                    <TouchableOpacity
                      style={{
                        width: 100,
                        alignSelf: "center",
                        marginLeft: 5
                        // marginTop: -=
                      }}
                      onPress={() => {
                        this.props.onchange();
                      }}
                    >
                      <AntDesign name="down" size={20} color="red" />
                    </TouchableOpacity>
                  ) : null}
                </View>
              ) : null}
            </View>
          </Left>
        ) : null}

        <Body
          style={[
            this.props.twoWords === true
              ? {
                  flex: 2,
                  alignItems: this.props.textAlign
                    ? this.props.textAlign
                    : "center",
                  marginLeft:
                    this.props.textAlign == "flex-start" ? -50 : "auto"
                }
              : this.props.threeWords === true
              ? { flex: 5, alignItems: "flex-start" }
              : this.props.fourWords === true
              ? { flex: 4, alignItems: "center" }
              : { flex: 1, alignItems: "center" }
          ]}
        >
          {this.props.headingText !== "" ? (
            <Text
              style={
                this.props.headingWhite
                  ? {
                      color: "white",
                      fontSize: RFPercentage(3.7),
                      fontWeight: "bold"
                    }
                  : { color: "black", fontSize: 18 }
              }
            >
              {this.props.headingText}
            </Text>
          ) : this.props.searchBar === true ? (
            <View
              style={{
                width: "95%",
                alignSelf: "center",
                borderWidth: 0,
                height: 40,
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                borderRadius: 5,
                elevation: 1
              }}
            >
              <View style={{ width: "15%", alignItems: "center" }}>
                <Fontisto
                  name={"search"}
                  style={{ fontSize: 20, color: "#e8041d" }}
                />
              </View>
              <View style={{ width: "70%" }}>
                <TextInput
                  style={{ borderColor: "#e5e5e5" }}
                  placeholder="Search"
                  placeholderTextColor="e5e5e5"
                  value={this.state.value}
                  onChangeText={text => this.setState({ value: text })}
                />
              </View>

              <TouchableOpacity
                onPress={() => this.setState({ value: "" })}
                style={{ width: "15%", alignItems: "center" }}
              >
                <Image
                  source={require("../../assets/Images/cross.png")}
                  resizeMode="contain"
                  style={{ width: "70%", height: "70%" }}
                />
              </TouchableOpacity>
            </View>
          ) : null}
        </Body>

        {this.props.left ? (
          <Right
            style={{
              flex: 1,
              marginLeft: 5
            }}
          >
            <TouchableOpacity
            // style={{
            //   width: 20,
            //   height: "100%",
            //   justifyContent: "center"
            // }}
            // onPress={() => this.props.navigation.goBack()}
            >
              {this.props.rightCross === true ? (
                <TouchableOpacity>
                  <Entypo
                    name={"cross"}
                    style={{ fontSize: 28, color: "#e8041d" }}
                    onPress={() => this.props.navigation.goBack()}
                  />
                </TouchableOpacity>
              ) : this.props.rightCompareArrow === true ? (
                <MaterialIcons
                  name={"compare-arrows"}
                  style={{ fontSize: 28, marginRight: 7, color: "#e8041d" }}
                  onPress={() =>
                    this.props.navigation.navigate("SelectPaymentGateway1")
                  }
                />
              ) : this.props.rightSearch === true ? (
                <Fontisto
                  name={"search"}
                  style={{ fontSize: 22, marginRight: 7, color: "#e8041d" }}
                  onPress={() => this.props.navigation.navigate("Search")}
                />
              ) : this.props.rightMenuDots === true ? (
                <Entypo
                  name={"dots-three-horizontal"}
                  style={{ fontSize: 22, marginRight: 7, color: "#e8041d" }}
                />
              ) : this.props.rightSkip === true ? (
                <Text
                  style={{ fontSize: 14, marginRight: 7, color: "#e8041d" }}
                  onPress={() => {
                    this.props.navigation.navigate("SignUp");
                  }}
                >
                  SKIP
                </Text>
              ) : null}
            </TouchableOpacity>
          </Right>
        ) : null}
      </Header>
    );
  }
}
