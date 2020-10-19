/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      setColor: this.props.color,

    };
  }


  render(props) {
    console.log(this.props.name);
    if (this.props.name === 'view5') {
      return (
        <View style={[styles.view5, { backgroundColor: this.state.setColor }]} >
          <Text style={styles.text}>{this.props.name} </Text>
        </View>
      );
    } else if (this.props.name === 'view6') {
      return (
        <View style={[styles.view6, { backgroundColor: this.state.setColor }]} >
          <Text style={styles.text}>{this.props.name} </Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.view1, { backgroundColor: this.state.setColor }]} >
          <Text style={styles.text}>{this.props.name} </Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  view1: {
    // borderColor: 'black',
    // borderWidth: 1,
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  view5: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 7,
    alignSelf: 'stretch',
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  view6: {
    flex: 3,
    height: 100,
    width: 100,
    justifyContent: 'center',
  },

  text: {
    // borderColor: 'black',
    // borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
});
