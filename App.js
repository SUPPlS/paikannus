import React from 'react';
import MapView from 'react-native-maps';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Map from './screens/Map';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
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
