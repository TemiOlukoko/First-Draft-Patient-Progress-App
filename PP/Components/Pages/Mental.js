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

                    <View style={styles.title}><Text style={{ fontSize: 23, fontFamily: 'semiBold' }}>Mental Health</Text></View>
                </View>
                {/* THIS IS THE UPPER MENU CODE */}


                <View style={styles.container}>
                    <View style={styles.rectColumn}>
                        <View style={styles.rect}>
                            <Text style={styles.stress}>STRESS</Text>
                        </View>
                        <View style={styles.rect3}>
                            <Text style={styles.depression}>DEPRESSION</Text>
                        </View>
                    </View>
                    <View style={styles.rectColumnFiller}>
                        <View style={styles.rect2}>
                            <Text style={styles.anxiety}>ANXIETY</Text>
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
        marginLeft: 260
    },

    container: {
        flex: 1
    },
    rect: {
        width: 375,
        height: 190,
        backgroundColor: "rgba(231,240,195,1)"
    },
    stress: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: 87,
        marginLeft: 156
    },
    rect3: {
        width: 375,
        height: 190,
        backgroundColor: "rgba(243,234,192,1)",
        marginTop: 206
    },
    depression: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: 87,
        marginLeft: 137
    },
    rectColumn: {
        width: 375,
        marginTop: 113
    },
    rect2: {
        width: 375,
        height: 190,
        backgroundColor: "rgba(164,212,174,1)"
    },
    anxiety: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        fontFamily: 'Bold',
        marginTop: 87,
        marginLeft: 151
    },
    rectColumnFiller: {
        flex: 1,
        justifyContent: "center"
    }

});
