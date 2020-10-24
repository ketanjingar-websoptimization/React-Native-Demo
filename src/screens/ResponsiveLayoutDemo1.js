import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
  Platform,
} from 'react-native';
import RandomColorSquare from '../components/RandomColorSquare';

export default function ResponsiveLayoutDemo1() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          width: '100%',
          backgroundColor: 'powderblue',
        }}>
        <View style={{height: '20%', width: '70%', backgroundColor: 'red'}}>
          <View
            style={{
              height: '20%',
              width: '30%',
              backgroundColor: 'blue',
            }}
          />
          <View
            style={{
              height: '20%',
              width: '70%',
              backgroundColor: 'green',
            }}
          />
        </View>

        <View style={{backgroundColor: 'violet'}}>
          <View
            style={{
              height: '20%',
              width: '30%',
              backgroundColor: 'yellow',
            }}
          />
          <View
            style={{
              height: '20%',
              width: '70%',
              backgroundColor: 'orange',
            }}
          />
        </View>
      </View>
    </>
  );
}
