import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Item = ({num, sum}) => (
  <View style={styles.title}>
    <Text style={styles.text}>
      {num} - {sum}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
  },
});

export {Item};
