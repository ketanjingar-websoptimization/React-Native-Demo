import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class SquareForApp2 extends Component {
  state = {setColor: this.props.color};

  render(props) {
    return (
      <View style={[styles.view1, {backgroundColor: this.state.setColor}]}>
        <Text style={styles.text}>{this.props.name} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    height: 75,
    width: 75,
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
