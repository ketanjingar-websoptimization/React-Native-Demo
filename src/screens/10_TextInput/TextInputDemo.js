import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const UselessTextInput = (props) => {
  return (
    <TextInput
      {...props}
      editable
      maxLength={40}
      style={{borderWidth: 1, borderColor: 'red'}}
    />
  );
};

export default class TextInputDemo extends Component {
  state = {
    textValue: '',
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Text Input 1</Text>
            <TextInput
              style={styles.textinput1}
              value={this.state.textValue}
              onChangeText={(text) => this.setState({textValue: text})}
            />
            <Divider />
            <Text style={styles.title}>Text Input 2</Text>
            <UselessTextInput
              multiline
              numberOfLines={4}
              autoCapitalize="words"
              autoCompleteType="off"
              value={this.state.textValue}
              onChangeText={(text) => this.setState({textValue: text})}
            />
            <Divider />

            <Text style={styles.title}>Password</Text>
            <TextInput
              textAlign="center"
              secureTextEntry
              style={styles.textinput1}
              value={this.state.textValue}
              onChangeText={(text) => this.setState({textValue: text})}
            />
            <Divider />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    padding: 10,
    // backgroundColor: 'powderblue',
  },
  textinput1: {
    borderWidth: 1,
    borderColor: 'grey',
  },

  title: {
    marginLeft: 5,
    fontSize: 18,
  },
});
