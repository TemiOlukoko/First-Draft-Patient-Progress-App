import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CallNursePage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topNavRectangle}>
        <View style={styles.hamburgerMenuRow}>
          <EntypoIcon name="menu" style={styles.hamburgerMenu}></EntypoIcon>
          <Text style={styles.callNurse}>Call Nurse</Text>
        </View>
      </View>
      <View style={styles.bookingRectangle}>
        <View style={styles.bookingTextRow}>
          <Text style={styles.bookingText}>
            Book a time slot for{"\n"}a call with the nurse
          </Text>
          <EntypoIcon name="calendar" style={styles.calendarIcon}></EntypoIcon>
        </View>
      </View>
      <View style={styles.urgentCallRectangle}>
        <View style={styles.urgentCallTextRow}>
          <Text style={styles.urgentCallText}>
            Make an urgent {"\n"}call to the nurse
          </Text>
          <FeatherIcon
            name="phone-call"
            style={styles.urgentCallIcon}
          ></FeatherIcon>
        </View>
      </View>
      <View style={styles.bottomNavRectangle}>
        <View style={styles.peopleButtonIconRow}>
          <MaterialIconsIcon
            name="people"
            style={styles.peopleButtonIcon}
          ></MaterialIconsIcon>
          <IoniconsIcon
            name="ios-call"
            style={styles.callButtonIcon}
          ></IoniconsIcon>
          <FontAwesomeIcon
            name="handshake-o"
            style={styles.helpButtonIcon}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            name="question"
            style={styles.faqButtonIcon}
          ></FontAwesomeIcon>
          <IoniconsIcon
            name="md-settings"
            style={styles.settingsButtonIcon}
          ></IoniconsIcon>
        </View>
      </View>
      <Text style={styles.nurseMaryPoppins}>Nurse Mary Poppins</Text>
      <Text style={styles.stGeorgesHospital}>St George&#39;s hospital</Text>
      <Text style={styles.birmingham}>Birmingham</Text>
      <Image
        source={require("../assets/images/nurse.png")}
        resizeMode="contain"
        style={styles.nurseAvatar}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topNavRectangle: {
    width: 375,
    height: 103,
    backgroundColor: "rgba(255,255,255,0.1)",
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 1,
    shadowRadius: 9,
    flexDirection: "row"
  },
  hamburgerMenu: {
    color: "rgba(0,0,0,1)",
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
  hamburgerMenuRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 21,
    marginLeft: 31,
    marginTop: 51
  },
  bookingRectangle: {
    width: 300,
    height: 137,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 27,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(155,155,155,1)",
    shadowRadius: 9,
    overflow: "scroll",
    flexDirection: "row",
    marginTop: 270,
    marginLeft: 75
  },
  bookingText: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-600",
    letterSpacing: 0,
    marginTop: 4
  },
  calendarIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 36
  },
  bookingTextRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 17,
    marginTop: 49
  },
  urgentCallRectangle: {
    width: 300,
    height: 137,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 27,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(155,155,155,1)",
    shadowRadius: 9,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 75
  },
  urgentCallText: {
    color: "#121212",
    fontSize: 16,
    fontFamily: "montserrat-600",
    letterSpacing: 1,
    marginTop: 8
  },
  urgentCallIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 38
  },
  urgentCallTextRow: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 27,
    marginTop: 45
  },
  bottomNavRectangle: {
    width: 375,
    height: 96,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 9,
    flexDirection: "row",
    marginTop: 35
  },
  peopleButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 1
  },
  callButtonIcon: {
    color: "rgba(164,212,174,1)",
    fontSize: 40,
    height: 40,
    width: 30,
    marginLeft: 27
  },
  helpButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    transform: [
      {
        rotate: "-21.00deg"
      }
    ],
    height: 40,
    width: 51,
    marginLeft: 36
  },
  faqButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 23,
    marginLeft: 39
  },
  settingsButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 33,
    marginLeft: 25
  },
  peopleButtonIconRow: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 36,
    marginLeft: 35,
    marginTop: 27
  },
  nurseMaryPoppins: {
    color: "#121212",
    fontSize: 20,
    fontFamily: "montserrat-700",
    marginTop: -529,
    marginLeft: 145
  },
  stGeorgesHospital: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-600",
    marginTop: 11,
    marginLeft: 213
  },
  birmingham: {
    color: "#121212",
    fontSize: 14,
    fontFamily: "montserrat-regular",
    marginTop: 12,
    marginLeft: 266
  },
  nurseAvatar: {
    width: 147,
    height: 147,
    marginTop: -228,
    marginLeft: 210
  }
});

export default CallNursePage;
