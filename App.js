import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av'

let setAudio = () => {
  Audio.setAudioModeAsync({
    playsInSilentModeIOS: false
    , allowsRecordingIOS: false
  }
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={setAudio} title="Bug it!" />
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
