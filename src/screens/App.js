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
import { SafeAreaView, StyleSheet, View, StatusBar, Alert } from 'react-native';
import Square from '../components/square';


class App extends React.Component {

  // is called after render method, It is used for the network calls.
  componentDidMount() {
    Alert.alert('componentDidMount()', 'called', [{ text: 'OK' }]);
  }

  // called if any error in any components in layout
  componentDidCatch() {
    Alert.alert('componentDidCatch()', 'called', [{ text: 'OK' }]);
  }

  // - It is called after the rendering, this method is mostly used to interact with updated
  //   rendering values and execute any post-render events.
  componentDidUpdate() {
    Alert.alert('componentDidUpdate()', 'called', [{ text: 'OK' }]);
  }

  // - It is called when the component is removed from the DOM,
  componentWillUnmount() {
    Alert.alert('componentWillUnmount()', 'called', [{ text: 'OK' }]);
  }

  // It is called every time before the screen or parent component re-renders.
  // We can stop the re-rendering of the screen by passing false in this
  shouldComponentUpdate() {
    Alert.alert('shouldComponentUpdate()', 'called', [{ text: 'OK' }]);
  }


  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>
              <Square name="view1" color="red" />
              <Square name="view2" color="green" />
              <Square name="view3" color="blue" />
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Square name="view4" color="yellow" />
            </View>

            <View style={{
              flexDirection: 'row', justifyContent: 'flex-end',
            }}>
              <Square name="view5" color="red" />
              <Square name="view6" color="green" />
              <Square name="view7" color="blue" />
            </View>

          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'powderblue',
  },
});


export default App;
