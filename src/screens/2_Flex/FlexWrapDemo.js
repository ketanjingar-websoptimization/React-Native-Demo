import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';

export default class FlexWrapDemo extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.mainContainer}>
            <View style={styles.view1} />
            <View style={styles.view2} />
            <View style={styles.view3} />
            <View style={styles.view4} />
            <View style={styles.view5} />
            <View style={styles.view6} />
            <View style={styles.view7} />
            <View style={styles.view8} />
            <View style={styles.view9} />
            <View style={styles.view10} />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexWrap: 'wrap',
    margin: 10,
  },
  view1: {
    height: 150,
    width: 50,
    backgroundColor: 'yellow',
    flexGrow: 1,
  },
  view2: {
    height: 150,
    width: 50,
    backgroundColor: 'orange',
    flexShrink: 0.5,
  },
  view3: {
    height: 150,
    width: 50,
    backgroundColor: 'seagreen',
  },
  view4: {
    height: 150,
    width: 50,
    backgroundColor: 'purple',
  },
  view5: {
    height: 150,
    width: 50,
    backgroundColor: 'blue',
    // flexGrow: ,
  },
  view6: {
    height: 150,
    width: 50,
    backgroundColor: 'crimson',
  },
  view7: {
    height: 150,
    width: 50,
    backgroundColor: 'orange',
  },
  view8: {
    height: 150,
    width: 50,
    backgroundColor: 'yellow',
  },
  view9: {
    height: 150,
    width: 50,
    backgroundColor: 'pink',
  },
  view10: {
    height: 150,
    width: 50,
    backgroundColor: 'red',
    position: 'absolute',
  },
});
