import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

export default class RadioButtonDemo extends React.Component {
  state = {
    checked: 'Male',
  };

  _clickHandler = (value) => {
    this.setState({
      checked: value,
    });
    Alert.alert(value);
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Normal Radio Button</Text>

            <RadioButton.Group
              onValueChange={(value) => this._clickHandler(value)}
              value={this.state.checked}>
              <RadioButton.Item label="Male" value="Male" color="red" />
              <RadioButton.Item label="Female" value="Female" />
              <RadioButton.Item
                label="Other"
                value="Other"
                unchecked
                color="dodgerblue"
                uncheckedColor="dodgerblue"
              />
            </RadioButton.Group>
          </View>
        </View>

        <Divider />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
