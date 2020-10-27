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
  // By default width taked 100% of parent
  // when parent height is not specified
  // it is calculate as ( ADD all child height = parent height)
  return (
    <View style={{backgroundColor: 'yellow'}}>
      <View style={{backgroundColor: 'red', height: '25%'}}></View>
      <View style={{backgroundColor: 'red', height: '25%'}}></View>
    </View>
  );
}
