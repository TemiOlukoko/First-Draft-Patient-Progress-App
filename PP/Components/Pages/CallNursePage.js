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


export default function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTwoOpen, setModalTwoOpen] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.upperMenu}>
        <View style={styles.lineFlex}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
        </View>
        <View style={styles.title}>
          <Text style={{fontSize:23}}>Call Nurse</Text>
        </View>
      </View>

      <View style={styles.nurseContainer}>
        <Image
        source={require(".PP/Components/Pages/assets/nurse.png")}
        resizeMode="contain"
        style={styles.nurseAvatar}
        ></Image>
      </View>

      <Text style={styles.nurseMaryPoppins}>Nurse Mary Poppins</Text>
      <Text style={styles.stGeorgesHospital}>St George's Hopsital</Text>
      <Text style={styles.birmingham}>Birmingham</Text>

      <View>
        <TouchableOpacity onPress={() => setModalOpen(true)}>
        <View style={styles.rectangle}>
          <View style={styles.textRow}>
            <Text style={styles.bookingText}>
              Book a time slot for{"\n"}a call with the nurse
            </Text>
            <FontAwesomeIcon icon={ faCalendarPlus } style={styles.calendarIcon} size={ 80 }/>
          </View>
        <Modal
        transparent={true}
        visible={modalOpen}
        animationType='fade'>
          <View style={styles.grayOverlay}>
            <View style={styles.bookPopUpContainer}>
              <Text style={styles.bookPopUpTitle}>Book Time Slot</Text>
              <Text style={styles.bookPopUpText}>We are currently unable to book appointments.</Text>
              <TouchableOpacity onPress={() => setModalOpen(false)}>
                <View style={styles.bookPopUpButtons}>
                  <Text style={styles.bookPopUpButtonText}>Exit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </View>
       </TouchableOpacity>
      </View>
      
      <View>
       <TouchableOpacity onPress={() => setModalTwoOpen(true)}>
          <View style={styles.rectangle}>
            <View style={styles.textRow}>
              <Text style={styles.urgentCallText}>
                Make an urgent {"\n"}call to the nurse
              </Text>
              <FontAwesomeIcon icon={ faPhoneSquareAlt } style={styles.urgentCallIcon} size={ 80 }/>
            </View>
          <Modal
          transparent={true}
          visible={modalTwoOpen}
          animationType='fade'>
            <View style={styles.grayOverlay}>
              <View style={styles.urgentPopUpContainer}>
                <Text style={styles.urgentPopUpTitle}>Urgent Call</Text>
                <Text style={styles.urgentPopUpText}>We are very busy and urge you not to call if your relative is not in a critical condition. Do you wish to call the nurse?</Text>
                <TouchableOpacity onPress={() => setModalTwoOpen(false)}>
                  <View style={styles.yesNoContainer}>
                    <View style={styles.noButton}>
                      <Text style={styles.urgentPopUpButtonText}>No</Text>
                    </View>
                    <View style={styles.yesButton}>
                      <Text style={styles.urgentPopUpButtonText}>Yes</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          </View>
       </TouchableOpacity>
      </View>

      <View style={styles.bottomNavRectangle}>
        <FontAwesomeIcon icon={ faUserFriends}  style={styles.bottomNavButtonIcon} size= {40} />
        <FontAwesomeIcon icon={ faPhoneAlt} style={styles.bottomNavButtonIcon} size= {40} color= {"rgba(164,212,174,1)"}/>
        <FontAwesomeIcon icon={ faHandsHelping } style={styles.bottomNavButtonIcon} size= {40} />
        <FontAwesomeIcon icon={ faQuestion } style={styles.bottomNavButtonIcon} size= {40}/>
        <FontAwesomeIcon icon={ faCog } style={styles.bottomNavButtonIcon} size= {40}/>
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


  //Nurses Avatar

  nurseContainer: {
    width: 147,
    height: 147
  },
  nurseAvatar: {
    width: 147,
    height: 147,
    marginTop: -10,
    marginLeft: 255,
  },

  //Nurse's Details

  nurseMaryPoppins: {
    color: "#121212",
    fontSize: 20,
    //fontFamily: "montserrat-700",
    marginTop: 11,
    marginRight: 10,
    textAlign: 'right'
  },
  stGeorgesHospital: {
    color: "#121212",
    fontSize: 14,
    //fontFamily: "montserrat-600",
    marginTop: 11,
    marginRight: 10,
    textAlign: 'right'
  },
  birmingham: {
    color: "#121212",
    fontSize: 14,
    //fontFamily: "montserrat-regular",
    marginTop: 12,
    marginRight: 10,
    textAlign: 'right'
  },
  nurseAvatar: {
    width: 147,
    height: 147,
    marginTop: 0,
    marginLeft: 260
  },

  rectangle: {
    width: 400,
    height: 137,
    backgroundColor: "rgba(255,255,255,1)",
    elevation: 27,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 4,
    shadowOpacity: 2,
    shadowColor: "rgba(155,155,155,1)",
    shadowRadius: 4,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 60
  },
  //Booking Rectangle

  bookingText: {
    color: "#121212",
    fontSize: 16,
    //fontFamily: "montserrat-600",
    letterSpacing: 0,
    marginTop: 4
  },
  calendarIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 50,
    marginTop: -17
  },

  textRow: {
    height: 80,
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 49
  },

  //Urgent Call Rectangle
  
  urgentCallText: {
    color: "#121212",
    fontSize: 16,
    //fontFamily: "montserrat-600",
    letterSpacing: 1,
    marginTop: 8
  },
  urgentCallIcon: {
    color: "rgba(88,172,168,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginLeft: 60,
    marginTop: -15
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

  },

  //Pop Ups


  grayOverlay: {
    flex: 1,
    backgroundColor: "#000000aa",
  },


//Book Call Pop Up
  bookPopUpContainer: {
    width: 305,
    height: 300,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 54,
    margin: 50,
    marginTop: 200,
    marginLeft: 60,
    padding: 50

  },
  bookPopUpTitle: {
    color: "#121212",
    fontSize: 23,
    //fontFamily: "montserrat-600",
    marginTop: 10,
    alignSelf: "center"
  },
  bookPopUpText: {
    color: "#121212",
    fontSize: 20,
    //fontFamily: "montserrat-regular",
    textAlign: "center",
    marginTop: 50,
    alignSelf: "center"
  },
  bookPopUpButtons: {
    width: 100,
    height: 33,
    backgroundColor: "rgba(172,88,88,1)",
    borderRadius: 28,
    marginTop: 40,
    marginLeft: 50,
    alignItems: 'center'
  },
  bookPopUpButtonText: {
    fontSize: 20,
    //fontFamily: "montserrat-500",
    color: "rgba(255,255,255,1)",
    marginTop: 4
  },

  //Urgent Call Pop Up
  urgentPopUpContainer: {
    width: 305,
    height: 350,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 54,
    margin: 50,
    marginTop: 200,
    marginLeft: 60,
    padding: 50

  },
  urgentPopUpTitle: {
    color: "#121212",
    fontSize: 23,
    //fontFamily: "montserrat-600",
    marginTop: -10,
    alignSelf: "center"
  },
  urgentPopUpText: {
    color: "#121212",
    fontSize: 20,
    //fontFamily: "montserrat-regular",
    textAlign: "center",
    marginTop: 30,
    alignSelf: "center"
  },

  yesNoContainer: {
    flexDirection: 'row',
    marginLeft: -70
  },

  noButton: {
    width: 100,
    height: 33,
    backgroundColor: "rgba(172,88,88,1)",
    borderRadius: 28,
    marginTop: 40,
    marginLeft: 50,
    alignItems: 'center',
  },
  yesButton: {
    width: 100,
    height: 33,
    backgroundColor: "rgba(88,172,168,1)",
    borderRadius: 28,
    marginTop: 40,
    marginLeft: 50,
    alignItems: 'center',
  },

  urgentPopUpButtonText: {
    fontSize: 20,
    //fontFamily: "montserrat-500",
    color: "rgba(255,255,255,1)",
    marginTop: 4
  }
  

});
