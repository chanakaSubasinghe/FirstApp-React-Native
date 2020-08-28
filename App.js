import React from 'react';
import {
  View,
} from 'react-native';

export default function App() {

  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row', // horizontal
      justifyContent: 'center', // main or primary axis
      alignItems: 'center', // secondary axis -> default is stretch
    }}>

      <View style={{
        backgroundColor: 'dodgerblue',
        flexBasis: 100, // set width or height with primary axis
        // width: 100,
        height: 100,
      }} />

      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }} />
    </View>
  );
}