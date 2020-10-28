/* @flow */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';

export default class CheckBoxDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      status: 'checked',
    };
  }
  _clickHandler() {
    this.state.checked === true
      ? this.setState({
          checked: false,
        })
      : this.setState({
          checked: true,
        });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.insideView}>
          <Text>Select your hobbies:</Text>
          <Checkbox.Item label="Cooking" status="checked" color="red" />
          <Checkbox.Item
            label="Exercise"
            status={this.state.checked === true ? 'checked' : 'unchecked'}
            onPress={() => this._clickHandler()}
          />
          <Checkbox.Item
            label="Music"
            status="unchecked"
            color="black"
            uncheckedColor="crimson"
            status={this.state.checked === true ? 'checked' : 'unchecked'}
            onPress={() => this._clickHandler()}
          />
          <Checkbox.Item label="Dancing" status="checked" disabled />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideView: {
    justifyContent: 'flex-start',
  },
});
