import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {

  return (
    // we can pass multiple objects to style attribute
    // style={[styles.container],[containerStyle]}
    <SafeAreaView style={styles.container}>

      <Button
        title="Click Me"
        onPress={() => console.log('Yes')} />

    </SafeAreaView>
  );
}
// this StyleSheet,create method will validate styles - spelling mistakes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
