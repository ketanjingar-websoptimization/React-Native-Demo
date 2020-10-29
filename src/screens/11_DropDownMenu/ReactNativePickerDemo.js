import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default class ReactNativePickerDemo extends Component {
  state = {
    language: 'java',
  };
  _changeHandler = (itemValue, itemIndex) => {
    this.setState({
      language: itemValue,
    });
    Alert.alert(itemValue);
  };
  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.language}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this._changeHandler(itemValue, itemIndex)
          }
          // enabled={false}
          mode="dropdown" // enum('dialog', 'dropdown')>
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'lavenderblush',
  },
  picker: {
    height: 50,
    width: 250,
    backgroundColor: 'lightgray',
  },
});
