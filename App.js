import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  SafeAreaView,
  View
} from 'react-native';

export default function App() {

  return (
    // SafeAreaView support for new iPhone's top notch 
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      {/* TouchableWithoutFeedback do not give feedback to user */}
      <TouchableWithoutFeedback onPress={() => console.log('TouchableWithoutFeedback')}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            uri: 'https://picsum.photos/350/200',
            width: 350,
            height: 200
          }} />
      </TouchableWithoutFeedback>

      {/* TouchableOpacity gives a small opacity when pressed */}
      <TouchableOpacity onPress={() => console.log('TouchableOpacity')}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            uri: 'https://picsum.photos/350/200',
            width: 350,
            height: 200
          }} />
      </TouchableOpacity>

      {/* TouchableHighlight gives small feedback */}
      <TouchableHighlight onPress={() => console.log('TouchableHighlight')}>
        <Image
          fadeDuration={1000}
          blurRadius={1}
          source={{
            uri: 'https://picsum.photos/350/200',
            width: 350,
            height: 200
          }} />
      </TouchableHighlight>

      {/* this gives native feedback only andriod */}
      <TouchableNativeFeedback onPress={() => console.log('TouchableNativeFeedback')}>
        <View style={{
          width: 200,
          height: 70,
          backgroundColor: "dodgerblue"
        }} />
      </TouchableNativeFeedback>
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
