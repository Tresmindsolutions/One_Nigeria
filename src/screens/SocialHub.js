import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
   Dimensions ,
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
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);
const FourthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#000000' }]} />
);
const FifthRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ffffff' }]} />
);


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pressStatus: false,
            index: 0,
            routes: [
                { key: 'first', title: 'Market' },
                { key: 'second', title: 'Posts' },
                { key: 'third', title: 'Videos' },
                { key: 'fourth', title: 'Jobs' },
                { key: 'fifth', title: 'Places' },
            ],
        };
    }
    _onHideUnderlay = () => {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay = () => {
        this.setState({ pressStatus: true });
    }

  render() {
    return (
      <View style={styles.container}>
          <View style={ styles.topView }>
              <View style={{ marginLeft:30}}>
                  <Text style={{ fontFamily: "Nunito-ExtraBold", color:"black", fontSize:25 }}>Social Hub</Text>
              </View>
              <View style={{ marginRight:30 }}>
                <Image style={{ width:36, height:36, borderRadius:18 }}
                source={require("../../assets/images/userImg.png")} 
                />
              </View>
          </View>
         
              {/* container for top search bar component */}
              <TabView
                labelStyle={{backgroundColor: "#000"}}
                navigationState={this.state}
                renderScene={SceneMap({
                first: FirstRoute,
                second: SecondRoute,
                third: ThirdRoute,
                fourth: FourthRoute,
                fifth: FifthRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
                {/* <View
                navigationState={this.state.routes[0]}
                renderScene={SceneMap({
                first: FirstRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}/> */}
                {/* <View navigationState={this.state}
                renderScene={SceneMap({
                second: SecondRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}/>
                <View
                navigationState={this.state}
                renderScene={SceneMap({
                third: ThirdRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}/>
                <View
                navigationState={this.state}
                renderScene={SceneMap({
                fourth: FourthRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}/>
                <View navigationState={this.state}
                renderScene={SceneMap({
                fifth: FifthRoute
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}/> */}
            {/* </TabView> */}
          
          <View style={{ marginLeft:20, marginRight:20, flexDirection:"row"}}>
              <TouchableOpacity style={ 
                        this.state.pressStatus ? styles.buttonPress : styles.button }>
                  <Text style={
                        this.state.pressStatus ? styles.welcomePress : styles.welcome}>Market</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ 
                        this.state.pressStatus ? styles.buttonPress : styles.button }>
                  <Text style={
                        this.state.pressStatus ? styles.welcomePress : styles.welcome}>Posts</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ 
                        this.state.pressStatus ? styles.buttonPress : styles.button }>
                  <Text style={
                        this.state.pressStatus ? styles.welcomePress : styles.welcome}>Videos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={ 
                        this.state.pressStatus ? styles.buttonPress : styles.button }>
                  <Text style={
                        this.state.pressStatus ? styles.welcomePress : styles.welcome}>Jobs</Text>
              </TouchableOpacity>
                <TouchableOpacity style={ 
                        this.state.pressStatus ? styles.buttonPress : styles.button }>
                  <Text style={
                        this.state.pressStatus ? styles.welcomePress : styles.welcome}>Places</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA"
  },
  topView: {
    marginTop:15, 
    alignContent:"space-between", 
    justifyContent:"space-between", 
    alignItems:"center", 
    flexDirection:"row"
  },
  scene: {
    flex: 1,
  },
  button: {
    width:"20%",
    justifyContent:"center", 
    alignContent:"center", 
    marginTop:7, 
    marginBottom:7, 
    borderWidth:1, 
    paddingTop:10, 
    paddingBottom:10, 
    alignItems:"center",
    borderRadius:20,
    backgroundColor:"white"
  },
  buttonPress: {
    width:"20%",
    justifyContent:"center", 
    alignContent:"center", 
    marginTop:7, 
    marginBottom:7, 
    borderWidth:1, 
    paddingTop:10, 
    paddingBottom:10, 
    alignItems:"center",
    borderRadius:20,
    backgroundColor:"green"
  },
  welcome: {
    fontFamily: "Nunito-Bold", 
    color:"#000000"
  },
  welcomePress: {
    fontFamily: "Nunito-Bold", 
    color:"#ffffff"
  }
});
