import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Dimensions, Easing, useColorScheme } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';

const { height } = Dimensions.get('window');  // get screen height

export default function TabTwoScreen() {
  const [randomCode, setRandomCode] = useState(generateRandomCode());
  const [counter, setCounter] = useState(20);
  const moveAnimation = useRef(new Animated.Value(0)).current; // start at top of screen
  const colorScheme = useColorScheme(); // Use color scheme

  function generateRandomCode() {
    return Math.floor(Math.random() * 99999) // generates a random number between 0 and 1000000
  }

  useEffect(() => {
    let timer: NodeJS.Timer | null = null;

    Animated.timing(moveAnimation, {
      toValue: height,
      duration: counter * 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(counter - 1);
        if (counter === 1) {
          setRandomCode(generateRandomCode());
          setCounter(20);
          moveAnimation.setValue(0); // reset animation
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter]);

  return (
      <View style={[styles.container, {backgroundColor: Colors[colorScheme || 'light'].curtain1}]}>
        <Animated.View
            style={[
              styles.backgroundFill,
              { transform: [{ translateY: moveAnimation }], backgroundColor: Colors[colorScheme || 'light'].curtain2 }  // Use translateY with pixels
            ]}
        />
        <Text style={styles.title}>MinID autentiseringskode:</Text>
        <Text style={[styles.code, {color: Colors[colorScheme || 'light'].textGrey}]}> {randomCode}</Text>
        <Text style={styles.counter}>Neste kode om {counter} sekunder </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  code: {
    fontSize: 72,
    fontWeight: "bold",
    marginVertical: 10,
  },
  counter: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  backgroundFill: {
    position: 'absolute',
    top: 0, // Start from top of the visible screen area
    left: 0,
    height: Dimensions.get('window').height * 2, // Make it twice as high as the screen
    width: '100%',
    backgroundColor: '#fff8e7', // Your color
  },
});
