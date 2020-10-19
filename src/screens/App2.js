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
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  FlatList,
} from 'react-native';
import SquareForApp2 from '../components/squareForApp2';

const Separator = () => (
  <View style={styles.separator} />
);

class App2 extends React.Component {
  state = {
    number: '',
  }

  render() {
    var randomColor = require('randomcolor');
    var color = randomColor();

    const Data = [];
    for (let i = 0; i < this.state.number; i++) {
      Data.push({ id: i, title: 'view1' });
    }

    const renderItem = ({ item }) => (
      <SquareForApp2 name={item.title} color={color} />
    );

    return (
      <>
        <StatusBar barStyle="default" />
        <SafeAreaView>
          <View style={styles.containerMain}>
            <TextInput
              style={styles.input}
              placeholder="Enter number to print squares"
              keyboardType="numeric"
              onChangeText={(value) => this.setState({
                number: value,
              })}
              value={this.state.text} />

            <Separator />
            <FlatList
              data={Data}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              numColumns={3}
              keyboardShouldPersistTaps="never"
              keyboardDismissMode="on-drag"
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    margin: 16,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});


export default App2;
