import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/**
 * * for IOS -> UIView
 * * for Android -> AndroidView
*/

export default function App() {

  return (
    // SafeAreaView support for new iPhone's top notch 
    <SafeAreaView style={styles.container}>
      <Text>Hello! React-Native!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  },
});
