import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.icon3Row}>
          <EntypoIcon name="menu" style={styles.icon3}></EntypoIcon>
          <Text style={styles.callNurse}>Call Nurse</Text>
        </View>
      </View>
      <View style={styles.rect2}>
        <View style={styles.loremIpsumRow}>
          <Text style={styles.loremIpsum}>
            Book a time slot for{"\n"}a call with the nurse
          </Text>
          <EntypoIcon name="calendar" style={styles.icon}></EntypoIcon>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.loremIpsum3Row}>
          <Text style={styles.loremIpsum3}>
            Make an urgent {"\n"}call to the nurse
          </Text>
          <FeatherIcon name="phone-call" style={styles.icon2}></FeatherIcon>
        </View>
      </View>
      <View style={styles.rect4}>
        <View style={styles.icon4Row}>
          <MaterialIconsIcon
            name="people"
            style={styles.icon4}
          ></MaterialIconsIcon>
          <IoniconsIcon name="ios-call" style={styles.icon5}></IoniconsIcon>
          <FontAwesomeIcon
            name="handshake-o"
            style={styles.icon6}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            name="question"
            style={styles.icon7}
          ></FontAwesomeIcon>
          <IoniconsIcon name="md-settings" style={styles.icon8}></IoniconsIcon>
        </View>
      </View>
      <Text style={styles.nurseMaryPoppins}>Nurse Mary Poppins</Text>
      <Text style={styles.stGeorgesHospital}>St George&#39;s hospital</Text>
      <Text style={styles.birmingham}>Birmingham</Text>
      <Image
        source={require("../assets/images/nurse.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 375,
    height: 103,
    backgroundColor: "rgba(255,255,255,0.1)",
    elevation: 27,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    shadowRadius: 9,
    flexDirection: "row"
  },
  icon3: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40
  },
  callNurse: {
    color: "#121212",
    fontSize: 23,
    fontFamily: "montserrat-700",
    letterSpacing: 0,
    marginLeft: 161,
    marginTop: 11
  },
  icon3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 26,
    marginLeft: 31,
    marginTop: 51
  },
  rect2: {
    width: 300,
    height: 137,
    backgroundColor: "rgba(255,255,255,0.34)",
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    overflow: "scroll",
    flexDirection: "row",
    marginTop: 270,
    marginLeft: 75
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    letterSpacing: 0,
    marginTop: 4
  },
  icon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 37
  },
  loremIpsumRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 45,
    marginLeft: 17,
    marginTop: 49
  },
  rect3: {
    width: 300,
    height: 137,
    backgroundColor: "rgba(255,255,255,0.34)",
    elevation: 27,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 75
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-regular",
    letterSpacing: 1,
    marginTop: 8
  },
  icon2: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 41
  },
  loremIpsum3Row: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 27,
    marginTop: 45
  },
  rect4: {
    width: 375,
    height: 96,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 27,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    flexDirection: "row",
    marginTop: 35
  },
  icon4: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 1
  },
  icon5: {
    color: "rgba(164,212,174,1)",
    fontSize: 40,
    height: 40,
    width: 30,
    marginLeft: 27,
    marginTop: 1
  },
  icon6: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 51,
    marginLeft: 36
  },
  icon7: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 23,
    marginLeft: 44,
    marginTop: 1
  },
  icon8: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 33,
    marginLeft: 24,
    marginTop: 1
  },
  icon4Row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 32,
    marginLeft: 35,
    marginTop: 27
  },
  nurseMaryPoppins: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "montserrat-700",
    marginTop: -529,
    marginLeft: 149
  },
  stGeorgesHospital: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    marginTop: 11,
    marginLeft: 213
  },
  birmingham: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    marginTop: 12,
    marginLeft: 261
  },
  image: {
    width: 147,
    height: 147,
    marginTop: -228,
    marginLeft: 205
  }
});

export default Untitled;
