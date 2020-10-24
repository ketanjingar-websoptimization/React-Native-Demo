import React, {Component, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';

//   <RandomColorSquare color="blue" height="40" width="40" />
export default class RandomColorSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setColor: this.props.color,
      setHeight: parseInt(this.props.height),
      setWidth: parseInt(this.props.width),
    };
  }

  render(props) {
    return (
      <View
        style={{
          backgroundColor: this.state.setColor,
          height: this.state.setHeight,
          width: this.state.setWidth,
        }}></View>
    );
  }
}
