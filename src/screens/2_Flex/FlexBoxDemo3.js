import React from 'react';
import {SafeAreaView, StyleSheet, View, StatusBar, Text} from 'react-native';

export default class FlexBoxDemo3 extends React.Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Flex Demo</Text>

            <View style={styles.view1}>
              <Text style={styles.text}>View 1</Text>
            </View>

            <View style={styles.view2}>
              <Text style={styles.text}>View 2</Text>
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
    justifyContent: 'center',
  },
  title: {
    borderWidth: 2,
    fontSize: 33,
    textAlign: 'center',
  },
  view1: {
    flex: 7,
    backgroundColor: 'crimson',
    justifyContent: 'center',
  },
  view2: {
    flex: 3,
    backgroundColor: 'coral',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
  },
});
