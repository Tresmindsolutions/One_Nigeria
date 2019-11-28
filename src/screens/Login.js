import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  TextInput,
  Button
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Content } from "native-base";
import { theme, FontColor } from "../components/constant/theme";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      eye: true,
      cross: false,
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/mapNew.png")}
          style={{ height: "80%", width: "100%" }}
          resizeMode={"stretch"}
        >
          <Image
            source={require("../../assets/images/logoLogin.png")}
            style={{
              height: "60%",
              width: "60%",
              alignSelf: "center"
            }}
            resizeMode={"contain"}
          />
        </ImageBackground>
        {/* <Content> */}
        <View style={styles.main}>
          <View style={styles.login}>
            <Text style={styles.loginTxt}>Login </Text>
          </View>

          <View style={styles.user}>
            <View style={styles.UserImg}>
              <FontAwesome5
                size={20}
                color={FontColor.green}
                name="at"
                style={{ borderWidth: 0 }}
              />
            </View>

            <View style={styles.UserText}>
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#7b7b7b"
                onChangeText={email => this.setState({ email })}
              />
            </View>
          </View>

          <View style={styles.PwdBox}>
            <View style={styles.PwdImage}>
              <FontAwesome5
                size={20}
                color={FontColor.green}
                name="lock"
                style={{ borderWidth: 0 }}
              />
            </View>
            <View style={styles.PwdField}>
              <TextInput
                //   secureTextEntry={this.state.hidden}
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#7b7b7b"
                onChangeText={password => this.setState({ password })}
              />
            </View>

            <TouchableOpacity
              onPress={() => this.setState({ hidden: !this.state.hidden })}
              style={styles.PwdEyeImg}
            >
              {this.state.hidden ? (
                <Entypo name="eye-with-line" size={20} color="#878787" />
              ) : (
                <Entypo name="eye" size={20} color="#878787" />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>Login</Text>
          </TouchableOpacity>
          <View style={styles.userBottom}>
            <Text style={styles.userBottomTxt}>Not a User?</Text>
            <TouchableOpacity style={{ borderWidth: 0 }}>
              <Text style={styles.userBottomTxt}>
                {"  "}
                Signup Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </Content> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  user: {
    borderBottomWidth: 0.8,
    borderBottomColor: theme.grayDark,
    // height:40,
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#ffffff"
    // marginTop: 10
  },

  UserImg: {
    // borderWidth:0,
    height: 40,
    width: "12%",
    // borderRadius: 5,
    justifyContent: "center"
    // alignItems: "center"
  },

  UsrImg: {
    width: "80%",
    height: "80%",
    tintColor: "#2f4e63"
  },

  UserText: {
    //borderWidth:0,
    height: 40,
    width: "70%"
    // borderRadius: 5
  },
  PwdBox: {
    borderBottomWidth: 0.8,
    borderBottomColor: theme.grayDark,
    height: 40,
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    marginTop: 12
  },

  PwdImage: {
    // borderWidth:0,
    height: 40,
    width: "12%",
    // borderRadius: 5,
    justifyContent: "center",
    alignItems: "flex-start"
  },

  PwdImg: {
    width: "80%",
    height: "80%"
  },

  PwdField: {
    width: "74%",
    borderRadius: 5
  },

  PwdEyeImg: {
    width: "12%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  EyeImg: {
    width: "60%",
    height: "50%"
  },
  main: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#ffffff",
    height: 270,
    borderRadius: 8,
    position: "absolute",
    bottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 5
  },
  loginTxt: {
    // fontWeight: "bold",
    fontSize: 26,
    color: FontColor.green,
    fontFamily: "Nunito-Bold"
  },
  loginBtn: {
    width: "90%",
    alignSelf: "center",
    height: 45,
    backgroundColor: FontColor.green,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  userBottom: {
    flexDirection: "row",
    justifyContent: "center",
    // borderWidth: 1,
    alignItems: "center",
    paddingVertical: 8
  },
  loginBtnTxt: {
    fontSize: 18,
    color: FontColor.white,
    fontFamily: "Nunito-Bold"
  },
  userBottomTxt: {
    fontSize: 14,
    color: FontColor.green,
    fontFamily: "Nunito-Bold"
  },
  input: {
    fontFamily: "Nunito-Bold",
    fontSize: 14,
    color: FontColor.gray
  }
});
