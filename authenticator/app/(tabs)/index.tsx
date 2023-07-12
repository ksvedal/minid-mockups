import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  const [randomCode, setRandomCode] = useState(generateRandomCode());
  const [counter, setCounter] = useState(120);

  function generateRandomCode() {
    return Math.floor(Math.random() * 1000000) // generates a random number between 0 and 1000000
  }

  useEffect(() => {
    let timer: NodeJS.Timer | null = null;

    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(counter - 1);
        if (counter === 1) {
          setRandomCode(generateRandomCode());
          setCounter(120);
        }
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [counter]);

  return (
      <View style={styles.container}>
        <Text style={styles.title}>MinID autentiseringskode:</Text>
        <Text style={styles.code}> {randomCode}</Text>
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
});
