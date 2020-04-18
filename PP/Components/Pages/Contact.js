import React, { useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

export default function App() {
  const newPatientAlert = () =>
    Alert.alert(
      "New Patient",
      "",
      [
        { text: "Add", onPress: () => console.log("Added New Patient") },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title={"My Relatives/Friends"} onPress={newPatientAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});
