import React, { useState, useEffect } from 'react';
import {Pressable, StyleSheet, useColorScheme} from 'react-native';
import { Text, View } from '../../components/Themed';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from "../../constants/Colors";
import {Link} from "expo-router";

export default function TabTwoScreen() {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <FontAwesome size={40} style={{ padding: 50, alignSelf: 'center' }} name={"user"} color={Colors[colorScheme ?? 'light'].text} />
            <Text style={styles.text}> Autentifikator koblet til:</Text>
            <Text style={styles.text}> Fødselsnummer * * * * * * * * 2 9 0 </Text>
            <Text style={styles.text}> SC: 292839900223223 </Text>
            <Link
                style={styles.link}
                href=".././modal" asChild>
                <Pressable>
                    {({ pressed }) => (
                        <FontAwesome
                            name="cog"
                            size={25}
                            color={Colors[colorScheme ?? 'light'].text}
                            style={{ opacity: pressed ? 0.5 : 1 }}
                        />
                    )}
                </Pressable>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        fontSize: 10,
        color: "#ffffff",
        marginVertical: 50
    }
});
