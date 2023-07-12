import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from '../../components/Themed';
import ScanQrButton from '../../components/ScanQrButton';
import {BarCodeScanner} from 'expo-barcode-scanner'
import React, { useEffect } from 'react';

export default function TabOneScreen() {
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  useEffect(() => {
    (async() => {
      const {status} = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({type, data}: {type: any, data: any}) => {
    setScanData(data);
    console.log(`Data : ${data}`);
    console.log(`Type : ${type}`);
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner 
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
        />
      {scanData && <ScanQrButton title='Scan Again?' onPress={() => setScanData(undefined)} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});