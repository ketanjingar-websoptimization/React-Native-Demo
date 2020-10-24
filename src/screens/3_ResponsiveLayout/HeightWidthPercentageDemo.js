/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';


export default class HeightWidthPercentageDemo extends React.Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <View style={{ width: '100%', height: '20%', backgroundColor: '#f44336' }} />
          <View style={{ width: '90%', height: '20%', backgroundColor: '#9c27b0' }} />
          <View style={{ width: '80%', height: '20%', backgroundColor: '#009688' }} />
          <View style={{ width: '70%', height: '20%', backgroundColor: '#8bc34a' }} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});