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
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from 'react-native';


class FlexBoxDemo4 extends React.Component {

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container} >

          <View style={styles.container}>
            <Text style={styles.title}>flex</Text>

            <View style={styles.view1}>
              <Text style={styles.text}>View 1</Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.text}>View 2</Text>
            </View>

            <View style={styles.view3}>
              <Text style={styles.text}>View 3</Text>
            </View>


          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    borderWidth: 2,
    fontSize: 33,
    textAlign: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: 'crimson',
    justifyContent: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    justifyContent: 'center',
  },
  text: {
    // borderWidth: 1,
    textAlign: 'center',
    fontSize: 23,
  },
});


export default FlexBoxDemo4;
