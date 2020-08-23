import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

// importing images
import iconImage from './assets/icon.png';

export default function App() {

  return (
    // SafeAreaView support for new iPhone's top notch 
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      {/* retrieve images from local computer */}
      <Image source={iconImage} />

      {/* retrieve images from network */}
      {/* this is not working in IOS */}
      <Image
        fadeDuration={1000}
        blurRadius={1}
        source={{
          uri: 'https://picsum.photos/350/200',
          width: 350,
          height: 200
        }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center"
  },
});
