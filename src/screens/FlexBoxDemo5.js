import React from 'react';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { SafeAreaView, StatusBar, View, StyleSheet, Text, FlatList } from 'react-native';

const DATA = [
  { id: 1, height: 50, width: 50 },
  { id: 2, height: 75, width: 75 },
  { id: 3, height: 45, width: 45 },
  { id: 4, height: 55, width: 55 },
  { id: 5, height: 24, width: 24 },
  { id: 6, height: 80, width: 80 },
  { id: 7, height: 100, width: 120 },
  { id: 8, height: 50, width: 50 },
  { id: 9, height: 50, width: 50 },
  { id: 10, height: 50, width: 50 },
];

const Item = ({ id, height, width }) => (
  <View style={{
    backgroundColor: '#f9c2ff',
    height: height,
    width: width,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    <Text style={{ fontSize: 22 }}>{id}</Text>
  </View>
);


class FlexBoxDemo5 extends React.Component {


  render() {
    const renderItem = ({ item }) => (
      <Item id={item.id} height={item.height} width={item.width} />
    );
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View style={styles.containerMain} >
            <FlatList
              data={DATA}
              renderItem={renderItem}
              // keyExtractor={item => item.id}
              numColumns={3}
            />

          </View>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  containerMain: {
    flexDirection: 'row',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

});

export default FlexBoxDemo5;

