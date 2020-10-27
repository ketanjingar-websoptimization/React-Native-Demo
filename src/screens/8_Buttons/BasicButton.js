import React from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';

export default class BasicButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press Me"
          onPress={() => Alert.alert('Simple Button Pressed.')}
        />
        <Divider />

        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="Press Me"
          color="#f194ff"
          onPress={() => Alert.alert('Button with different color pressed.')}
        />
        <Divider />

        <Text style={styles.title}>Disabled Button Example</Text>
        <Button
          disabled
          title="Press Me"
          color="#f194ff"
          onPress={() => Alert.alert('Cannot press this one')}
        />
        <Divider />

        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Press Me"
            onPress={() => Alert.alert('Left Button pressed')}
          />
          <Button
            title="Press Me"
            onPress={() => Alert.alert('Right Button pressed')}
          />
        </View>
        <Divider />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
