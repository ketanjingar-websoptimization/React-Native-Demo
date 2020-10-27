import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default Item = ({num, sum, isSelected}) => {
  return (
    <View style={styles.title}>
      <Text style={styles.text}>
        {num} - {sum}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  title: {
    fontSize: 32,
  },
});
