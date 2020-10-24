import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  Platform,
} from 'react-native';

export default function Rough() {
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <View style={{backgroundColor: 'red', height: '25%'}}></View>
      <View style={{backgroundColor: 'red', height: '25%'}}></View>
    </View>
  );
}
