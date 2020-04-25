import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (


    <View style={styles.container}>
      <View style={styles.upperMenu}>
        <View style={styles.lineFlex}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize:23}}>Settings</Text>
        </View>
      </View>

      {/*Profile name and Avatar*/}

      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profile}>Profile</Text>
          <Text style={styles.johnDoe}>John Doe</Text>
        </View>
        <Image
        source={require("./assets/JD_test.png")}
        resizeMode="contain"
        style={styles.profileAvatar}
        ></Image>
      </View>

      {/*Menu List*/}

      <View>
        <View style={styles.menuLine} borderBottomColor={'red'}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faBell} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Notifications</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faMobile} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Dark Mode</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faQuestionCircle} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>About</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Report</Text>
        </View>

        <View style={styles.menuLine}></View>
        <View style={styles.menuItems}>
          <FontAwesomeIcon icon={faSignOutAlt} style={styles.menuIcons} size= {25}/>
          <Text style={styles.menuText}>Sign Out</Text>
        </View>

      </View>

      {/*Bottom Navigation*/}

      <View style={styles.bottomNavRectangle}>
        <FontAwesomeIcon icon={ faUserFriends}  style={styles.bottomNavButtonIcon} size= {40} />
        <FontAwesomeIcon icon={ faPhoneAlt} style={styles.bottomNavButtonIcon} size= {40}/>
        <FontAwesomeIcon icon={ faHandsHelping } style={styles.bottomNavButtonIcon} size= {40} />
        <FontAwesomeIcon icon={ faQuestion } style={styles.bottomNavButtonIcon} size= {40}/>
        <FontAwesomeIcon icon={ faCog } style={styles.bottomNavButtonIcon} size= {40} color= {"rgba(164,212,174,1)"}/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTwo: {
    flex: 2,
    backgroundColor: '#fff',
  },
  //Upper Menu

  upperMenu: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    shadowOffset: {width: 0, height: 0},
    shadowColor: 0.27,
    shadowRadius: 1,
    shadowOpacity: 1,
    elevation: 6,
    //zIndex needed for iOS
    zIndex:999,
    flexDirection: 'row',
    marginBottom:30
  },

  line: {
    width: 23,
    height: 3,
    backgroundColor: 'black',
    marginBottom: 4
  },

  lineFlex: {
    marginTop: 29,
    marginLeft: 18
  },

  title: {
    marginTop: 25,
    marginLeft: 260
  },


  //Profile Avatar

  profileContainer: {
    width: '100%',
    height: 147,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  profileAvatar: {
    width: 120,
    height: 120,
    marginTop: -10,
    marginRight: 20
  },

  //Profile Details

  profile: {
    color: "#121212",
    fontSize: 20,
    //fontFamily: "montserrat-700",
    marginTop: 30,
    marginRight: 20,
    textAlign: 'right'
  },
  johnDoe: {
    color: "#121212",
    fontSize: 14,
    //fontFamily: "montserrat-600",
    marginTop: 11,
    marginRight: 20,
    textAlign: 'right'
  },


  //Settings Menu

  menuLine:{
    width: 300,
    height: 3,
    borderTopWidth: 1,
    borderTopColor: '#58ACA8',
    alignSelf: 'center',
    marginBottom: 25

  },

  menuItems:{
    flexDirection: 'row',
    marginLeft: 60
  },

  menuIcon: {
    width: 20,
    height: 20
  },

  menuText:{
    //fontFamily: "montserrat-regular",
    fontSize: 20,
    marginLeft: 30,
    marginBottom: 25
  },

  //Bottom Navigation

  bottomNavRectangle: {
    width: '100%',
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: 'stretch',
    elevation: 27,
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowRadius: 4,
    shadowOpacity: 2,
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 15,
    paddingLeft: 30,
    paddingRight: 30,
    position: 'absolute',
    bottom:0
    
  },
  bottomNavButtonIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 1,
    alignItems: 'center'

  }


});