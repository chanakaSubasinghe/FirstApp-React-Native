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
      flexWrap: 'wrap', // enabling wrapping - each items get their own width and height
      alignContent: 'center' // all content will set to center
    }}>

      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
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
      <View style={{
        backgroundColor: 'gray',
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        width: 100,
        height: 100
      }} />
    </View>
  );
}