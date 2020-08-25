import React from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Dimensions
} from 'react-native';

export default function App() {
  // get device orientations
  const { landscape, portrait } = useDeviceOrientation();

  return (
    // we can pass multiple objects to style attribute
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? '100%' : '30%'
      }}></View>
    </SafeAreaView>
  );
}
// this StyleSheet,create method will validate styles - spelling mistakes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});


// Density-Independent Pixels
// Physical Pixels = DIP x Scale Factor


/**
 * Model        -> 4, 4S
 * Points       -> 320 x 480
 * Scale Factor -> 2x
 * Pixels       -> 640 x 960
 * View Width   -> 150 x 2 = 300
 */

/**
* Model        -> 11 Pro Max
* Points       -> 414 x 896
* Scale Factor -> 3x
* Pixels       -> 1242 x 2688
* View Width   -> 150 x 3 = 450
*/