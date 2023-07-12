import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Platform, StyleSheet, Switch, Button, useColorScheme} from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from "../constants/Colors";

export default function ModalScreen() {
  const colorScheme = useColorScheme();

  const [isEnabled1, setIsEnabled1] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Innstillinger</Text>
        <View style={styles.separator} lightColor={Colors[colorScheme ?? 'light'].textGrey} darkColor={Colors[colorScheme ?? 'light'].textGrey} />
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />

        <Text style={styles.underTitle} lightColor={Colors[colorScheme ?? 'light'].textGrey} darkColor={Colors[colorScheme ?? 'light'].textGrey} >Primærside</Text>

        <View style={styles.row}>
          <Text style={styles.text}>QR scanner</Text>
          <Switch
              trackColor={{ false: Colors[colorScheme ?? 'light'].textInverse, true: Colors[colorScheme ?? 'light'].textInverse }}
              ios_backgroundColor={Colors[colorScheme ?? 'light'].textInverse}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
          />
          <Text style={styles.text}>Kode</Text>
        </View>

        <View style={styles.separator} lightColor={Colors[colorScheme ?? 'light'].textGrey} darkColor={Colors[colorScheme ?? 'light'].textGrey} />

        <Text style={styles.underTitle} lightColor={Colors[colorScheme ?? 'light'].textGrey} darkColor={Colors[colorScheme ?? 'light'].textGrey}> Koble av autentifikator </Text>

        <Button
            color={Colors[colorScheme ?? 'light'].text}
            title="Koble fra"
            onPress={() => console.log("Button Pressed")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  underTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 20,
},
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
});
