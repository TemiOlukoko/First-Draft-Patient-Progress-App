import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default function Mental() {

    let [fontsLoaded] = useFonts({
        'Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'semiBold': require('./assets/fonts/Montserrat-SemiBold.ttf')
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

        return (

            <View>

                {/* THIS IS THE UPPER MENU CODE */}
                <View style={styles.upperMenu}>
                    <View style={styles.lineFlex}>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                        <View style={styles.line}></View>
                    </View>

                    <View style={styles.title}><Text style={{ fontSize: 20, fontFamily: 'semiBold' }}>Mental Health</Text></View>
                </View>
                {/* THIS IS THE UPPER MENU CODE */}


                <View style={styles.container}>
                    <View style={styles.rectColumn}>
                        <View style={styles.rect}>
                            <Text style={styles.anxiety}>ANXIETY</Text>
                        </View>
                        <View style={styles.rect3}>
                            <Text style={styles.stress}>STRESS</Text>
                        </View>
                    </View>
                    <View style={styles.rectColumnFiller}>
                        <View style={styles.rect2}>
                            <Text style={styles.depression}>DEPRESSION</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    upperMenu: {
        width: '100%',
        height: 70,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.27,
        elevation: 6,
        // zIndex needed for iOS
        zIndex: 999,
        flexDirection: 'row',
        marginBottom: 30
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
        marginLeft: 210
    },

    container: {
        flex: 1
    },
    //Anxiety
    rect: {
        width: 500,
        height: 500,
        backgroundColor: "rgba(231,240,195,1)", //
        flex: 0.3,
        marginBottom: -380,
        marginTop: -25,
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf:'center'
    },
    anxiety: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: -5,
        marginLeft: 225
    },
    //Stress
    rect3: {
        width: 500,
        height: 50,
        backgroundColor: "rgba(243,234,192,1)", //
        marginTop: 15,
        marginBottom: -260,
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    stress: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: 50,
        marginLeft: 230
    },
    rectColumn: {
        width: 375,
        marginTop: 113
    },
    //Depression
    rect2: {
        width: 500,
        height: 50,
        backgroundColor: "rgba(164,212,174,1)",
        justifyContent: 'center',
        marginTop: -50,
        marginBottom: -520,
        flex:0.3,
        flexDirection: 'column',
        alignSelf: 'center'
    },
    depression: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: 70,
        marginLeft: 195,
        marginBottom: 70
    },
    rectColumnFiller: {
        flex: 1,
        justifyContent: "center"
    }

});
