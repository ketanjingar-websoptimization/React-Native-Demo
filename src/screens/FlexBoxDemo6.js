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


class FlexBoxDemo6 extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.mainContainer}>
            <View style={styles.view2} >
              <View style={styles.view3} />
              <View style={styles.view4} />
              <View style={styles.view5} />
              {/* <View style={styles.view7} /> */}
            </View>
            <View style={styles.view6} />
          </View>


        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  view2: {
    margin: 10,
    height: 500,
    width: '100%',
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    flexDirection: 'row',
    // alignSelf: 'flex-end',
  },
  view3: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  view4: {
    // height: 50,
    width: 50,
    backgroundColor: 'red',
    alignSelf: 'stretch',
  },
  view5: {
    height: 50,
    width: 50,
    backgroundColor: 'seagreen',
  },
  view7: {
    height: 50,
    // width: 50,
    backgroundColor: 'orange',
  },
  view6: {
    height: 30,
    width: 40,
    backgroundColor: 'crimson',
  },
});

export default FlexBoxDemo6;
