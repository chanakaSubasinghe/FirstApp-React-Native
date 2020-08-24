import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Button,
  Alert
} from 'react-native';

export default function App() {

  return (
    // SafeAreaView support for new iPhone's top notch 
    <SafeAreaView style={styles.container}>
      {/* alert method work on both android and IOS */}
      <Button
        title="Click Me"
        color="orange"
        onPress={() => Alert.alert('My title', 'My Message', [
          {
            text: 'Yes',
            onPress: () => console.log('Yes')
          },
          {
            text: 'No'
          }
        ])} />

      {/* prompt method work on only IOS */}
      <Button
        title="Click Me"
        color="purple"
        onPress={() => Alert.prompt('My title', 'My Message', (text) => console.log(text))} />
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
