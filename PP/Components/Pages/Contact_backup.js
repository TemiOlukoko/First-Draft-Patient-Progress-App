import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet, Image, CheckBox} from "react-native";
import Dialog from "react-native-dialog";
export default class DialogTester extends Component {
  state = {
    dialogVisible: false
  };
 
  showDialog = () => {
    this.setState({ dialogVisible: true });
};

handleAdd = () => {
    this.setState({ dialogVisible: false});

  };

  handleCancel = () => {
    this.setState({ dialogVisible: false});
  };
 //Pop-up code
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.showDialog}>
            <Text style={styles.text}>My relatives/friends</Text>
            <Image style={styles.image} source={require('./assets/Vector.png')} />
          </TouchableOpacity>
        </View>

        <View>
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>New Patient</Dialog.Title>
            <Dialog.Description>
              NHS Number:
            </Dialog.Description>
            <Dialog.Input></Dialog.Input>
            <Text>Notify me if my relative passes away</Text>
            <CheckBox value={false}/>
            <Dialog.Button label="Add" onPress={this.handleCancel} />
            <Dialog.Button label="Cancel" onPress={this.handleDelete} />
          </Dialog.Container>
        </View>
        
  

        
        
        <View style={styles.contact}>
          <View style={styles.relatives}>
            <Text style={styles.relativesFont}>Jane Doe</Text>
          </View>    
          <View style={styles.info}>
              <Text style={styles.relativeInfo}>St.George&#39;s Hospital{"\n"}Last updated: 14th June 10:20</Text>
          </View>
          <View>
            <Image style={styles.relativeIcon} source={require('./assets/Vectorperson.png')} />
          </View>
        </View>  
        <View style={styles.contact}>
          <View style={styles.relatives}>
            <Text style={styles.relativesFont}>Jill Doe</Text>
          </View>    
          <View style={styles.info}>
              <Text style={styles.relativeInfo}>St.George&#39;s Hospital{"\n"}Last updated: 14th June 10:20</Text>
          </View>
          <View>
            <Image style={styles.relativeIcon} source={require('./assets/Vectorperson.png')} />
          </View>
      </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'white',
  },
  buttonContainer: {
    padding:5,
    backgroundColor:'white',
    justifyContent:'center',
    flexDirection: 'row',
    alignItems:'center'
  },
  button: {
    shadowColor: 'rgba(0,0,0, .25)',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius:40,
    backgroundColor: '#fff',
    height: 55,
    width: "75%",
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:22,
    fontWeight:"500",
    top:"25%",
    right:"10%"
  },
  image:{
    left:'40%',
    bottom:'20%'
  },
  contact:{
    //flexBasis: '20%',
   //alignItems:'flex-end',
    //justifyContent:'flex-end',
    //padding:'1%', 
    marginLeft:'5%',
    marginVertical: '2.5%',
    backgroundColor: '#32AFA9',
    //height:'32%',
    borderColor: '#32AFA9',
    //borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 4,
    shadowOpacity: 2,
    elevation: 5,
    height:'20%'
    //flexWrap:'wrap'
  },
  relatives:{
    alignItems:'flex-start',
    flexGrow:1,
    paddingBottom:10,
    marginTop:'5%',
    marginLeft:'2%'
    
  },  
  relativesFont:{
    fontSize:30, 
    color:'white'
  },  
  relativeIcon:{
    marginLeft:'75%',
    flexDirection:'row',
    bottom:'30%',
    height: 70,
    width:70,
  },  
  info:{
    flexGrow:1,
    marginLeft:'2%'
  },
  relativeInfo:{
    fontSize:25,
    lineHeight:40,
    color:'white'
  }    
});  