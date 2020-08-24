import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native';

export default function App() {

  return (
    // SafeAreaView support for new iPhone's top notch 
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me"
        color="orange"
        onPress={() => console.log('Button tapped')} />
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
