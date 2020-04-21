import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Title,
    Caption,
    Paragraph,
    Drawer
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import userAvatar from './PP/Components/Pages/assets/user-avatar.png';

import { Ionicons } from '@expo/vector-icons';

export function DrawerContent(props) {
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Image source={userAvatar} size={50} />

                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>User Profile</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>2</Paragraph>
                                <Caption style={styles.caption}>contacts</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons name="inbox-arrow-down"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Feed"
                            onPress={() => { props.navigation.navigate('Feed') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons name="md-information-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About"
                            onPress={() => { props.navigation.navigate('About') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons name="md-settings"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('Settings') }}
                        />

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Ionicons name="md-exit"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { props.navigation.navigate('Login') }}
                />

            </Drawer.Section>
        </View>
    );
}
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
        backgroundColor: '#32afa9'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
