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
    data = [
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
    ]
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
          style={{position: "absolute", height: "100%", width: "100%",backgroundColor: "#f5f5f5" }}
          resizeMode={"stretch"}
        >
          <Image
            source={require("../../assets/images/logoLogin.png")}
            style={{
              height: 120,
              width: "70%",
              alignSelf: "center"
            }}
            resizeMode={"contain"}
          />
        <View style={styles.main}>
          <View style={styles.login}>
            <Text style={styles.loginTxt}>Signup</Text>
          </View>

          <View style={styles.capPic}>
            <Image
              source={require("../../assets/images/userImg.png")}
              style={{ height: 85, width: "100%" }}
              resizeMode={"contain"}
            />
          </View>
          <View style={styles.mainUpload}>
            <TouchableOpacity style={styles.takePhoto}>
                <Image
                  source={require("../../assets/images/camera.png")}
                  style={{ height: 20, width: 22 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: FontColor.green,
                    fontFamily: "Nunito-Bold",
                    marginLeft: 8
                  }}
                >
                  Take a Photo
                </Text>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.6,
                borderColor: "#999",
                marginVertical: 8,
                height: 25
              }}
            ></View>
            <TouchableOpacity style={styles.takePhoto}>
                <Image
                  source={require("../../assets/images/img.png")}
                  style={{ height: 18, width: 24 }}
                />
                <Text
                  style={{
                    fontSize: 16,
                    color: FontColor.green,
                    fontFamily: "Nunito-Bold",
                    marginLeft: 8
                  }}
                >
                  Upload
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.user}>
              <FontAwesome5
                size={20}
                color={FontColor.green}
                name="calendar-day"
                style={{}}
                
              />
              <DatePicker
                date={this.state.date}
                mode="date"
                placeholder="Select Date"
                format="MM-DD-YYYY"
                minDate="05-21-2019"
                maxDate="05-22-2040"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                style={{ width: "85%",alignSelf: "flex-end"}}
                customStyles={{
                  dateIcon: {
                    // position: "absolute",
                    // left: 0,
                    // top: 4,
                    // right: 10,
                    // width: 30
                  },

                  dateInput: {
                    borderWidth: null,
                    alignItems: "flex-start"
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  console.log(date);
                  this.setState({ date: date });
                }}
              />
            {/* </View> */}
          </View>

          <View style={styles.PwdBox}>
              <Image
                source={require("../../assets/images/user.png")}
                style={{ height: 22, width: 22 }}
                resizeMode={"contain"}
              />
              <View style={{width: "85%"}}>
              <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                placeholder={placeholder}
                style={pickerSelectStyles}
                placeholderTextColor={theme.gray}
                onValueChange={value => console.log(value)}
                Icon={() => {
                  return (
                    <AntDesign
                      name="caretdown"
                      size={18}
                      color={theme.green}
                    />
                  );
                }}
                style={styles}
                items={data}
              />
          </View>
          </View>
          <View style={styles.PwdBox}>
              <FontAwesome5
                name="globe-africa"
                size={22}s
                color={theme.green}
              />
              <View style={{width: "85%"}}>
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
                      // style={{ marginTop: 5 }}
                      color={theme.green}
                    />
                  );
                }}
                style={styles}
                items={data}
              />
              </View>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnTxt}>SignUp</Text>
          </TouchableOpacity>
          <View style={styles.userBottom}>
            <Text style={styles.userBottomTxt}>Already a User?</Text>
            <TouchableOpacity style={{ borderWidth: 0 }}>
              <Text style={styles.userBottomTxt}>
                {"  "}
                Signup Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
      </View>
    );
  }
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    paddingRight : 50,
    width : 400,
    backgroundColor :"red" // to ensure the text is never behind the icon
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  user: {
    borderBottomWidth: 0.8,
    borderBottomColor: theme.grayDark,
    // height:40,
    flexDirection: "row",
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent : "space-between",
    marginTop: 20,
    backgroundColor: "#fff"
    // marginTop: 10
  },

  UsrImg: {
    width: "80%",
    height: "80%",
    tintColor: "#2f4e63"
  },
  PwdBox: {
    borderBottomWidth: 0.8,
    borderBottomColor: theme.grayDark,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    height: "80%",
    borderRadius: 10,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,

  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    // marginTop: 5
  },
  loginTxt: {
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  mainUpload: {
    backgroundColor: "#ffffff",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignItems: "center",
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.18,
shadowRadius: 1.00,

elevation: 1,


  },
  takePhoto: {
    width: "50%",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height : 45
  },
});
