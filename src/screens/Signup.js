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
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import DatePicker from "react-native-datepicker";
import RNPickerSelect from "react-native-picker-select";
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
    const placeholder = {
      label: "All States",
      value: null
      //color: "red"
      // fontSize: 40
    };
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/mapNew2.png")}
          style={{ height: "80%", width: "100%" }}
          resizeMode={"stretch"}
        >
          <Image
            source={require("../../assets/images/logoLogin.png")}
            style={{
              height: "30%",
              width: "60%",
              alignSelf: "center"
            }}
            resizeMode={"contain"}
          />
        </ImageBackground>
        {/* <Content> */}
        <View style={styles.main}>
          <View style={styles.login}>
            <Text style={styles.loginTxt}>Signup </Text>
          </View>

          <View style={styles.capPic}>
            <Image
              source={require("../../assets/images/userImg.png")}
              style={{ height: 70, width: 70 }}
              resizeMode={"contain"}
            />
          </View>
          <View style={styles.mainUpload}>
            <View style={styles.takePhoto}>
              <View style={{ borderWidth: 0 }}>
                <Image
                  source={require("../../assets/images/camera.png")}
                  style={{ height: 25, width: 25 }}
                />
              </View>
              <View style={{ borderWidth: 0 }}>
                <Text
                  style={{
                    color: FontColor.green,
                    fontFamily: "Nunito-Bold",
                    marginLeft: 8
                  }}
                >
                  Take a Photo
                </Text>
              </View>
            </View>
            <View
              style={{
                // width: 1,
                borderWidth: 0.4,
                color: FontColor.gray,
                marginTop: 8,
                height: 25
              }}
            ></View>
            <View style={styles.upload}>
              <View style={{ borderWidth: 0 }}>
                <Image
                  source={require("../../assets/images/img.png")}
                  style={{ height: 25, width: 25 }}
                />
              </View>
              <View style={{ borderWidth: 0 }}>
                <Text
                  style={{
                    color: FontColor.green,
                    fontFamily: "Nunito-Bold",
                    marginLeft: 8
                  }}
                >
                  Upload
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.user}>
            <View style={styles.UserImg}>
              <FontAwesome5
                size={20}
                color={FontColor.green}
                name="calendar-day"
                style={{ borderWidth: 0 }}
              />
            </View>

            <View style={styles.UserText}>
              <DatePicker
                date={this.state.date}
                mode="date"
                placeholder="Select Date"
                format="MM-DD-YYYY"
                minDate="05-21-2019"
                maxDate="05-22-2040"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                style={{ width: "100%", borderWidth: 1 }}
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    // left: 0,
                    // top: 4,
                    right: 10,
                    width: 30
                  },

                  dateInput: {
                    marginLeft: 0,
                    borderWidth: 0,
                    alignItems: "flex-start"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  console.log(date);
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>

          <View style={styles.PwdBox}>
            <View style={styles.PwdImage}>
              <Image
                source={require("../../assets/images/user.png")}
                style={{ height: 22, width: 22 }}
                resizeMode={"contain"}
              />
            </View>
            <View style={styles.PwdField}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={placeholder}
                placeholderTextColor={theme.gray}
                onValueChange={value => console.log(value)}
                Icon={() => {
                  return (
                    <AntDesign
                      name="caretdown"
                      size={18}
                      style={{ marginTop: 5 }}
                      color={theme.green}
                    />
                  );
                }}
                style={styles}
                items={[
                  { label: "Alabama", value: "football", color: "#636262" },
                  { label: "Alaska", value: "football", color: "#636262" },
                  { label: "California", value: "baseball", color: "#636262" },
                  { label: "Florida", value: "football", color: "#636262" },
                  { label: "Hawaii", value: "baseball", color: "#636262" },
                  { label: "Maryland", value: "football", color: "#636262" },
                  { label: "New Jersey", value: "baseball", color: "#636262" },
                  { label: "New Mexico", value: "football", color: "#636262" },
                  { label: "New York", value: "baseball", color: "#636262" },
                  { label: "Texas", value: "hockey", color: "#636262" }
                ]}
              />
            </View>
          </View>
          <View style={styles.PwdBox}>
            <View style={styles.PwdImage}>
              <FontAwesome5
                name="globe-africa"
                size={22}
                style={{ marginTop: -2 }}
                color={theme.green}
              />
            </View>
            <View style={styles.PwdField}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={placeholder}
                placeholderTextColor={theme.gray}
                onValueChange={value => console.log(value)}
                Icon={() => {
                  return (
                    <AntDesign
                      name="caretdown"
                      size={18}
                      style={{ marginTop: 5 }}
                      color={theme.green}
                    />
                  );
                }}
                style={styles}
                items={[
                  { label: "Alabama", value: "football", color: "#636262" },
                  { label: "Alaska", value: "football", color: "#636262" },
                  { label: "California", value: "baseball", color: "#636262" },
                  { label: "Florida", value: "football", color: "#636262" },
                  { label: "Hawaii", value: "baseball", color: "#636262" },
                  { label: "Maryland", value: "football", color: "#636262" },
                  { label: "New Jersey", value: "baseball", color: "#636262" },
                  { label: "New Mexico", value: "football", color: "#636262" },
                  { label: "New York", value: "baseball", color: "#636262" },
                  { label: "Texas", value: "hockey", color: "#636262" }
                ]}
              />
            </View>
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
    width: "90%"
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
    // borderWidth: 1,
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
    width: "85%",
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
    height: 420,
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
  },
  capPic: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  mainUpload: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  takePhoto: {
    width: "49%",
    backgroundColor: "#ffffff",
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  upload: {
    width: "49%",
    borderWidth: 0,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8
  }
});
