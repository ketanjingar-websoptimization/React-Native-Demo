import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2';
import {
  TextInput,
  Card,
  Avatar,
  Title,
  Paragraph,
  Button,
} from 'react-native-paper';
const DATA = [
  {value: 'Heading'},
  {value: 'Title'},
  {value: 'Subheading'},
  {value: 'Body'},
];
const COLOR = [{value: 'Blue'}, {value: 'Teal'}, {value: 'Cyan'}];
const FONTSIZE = [{value: 12}, {value: 14}, {value: 16}, {value: 18}];

export default class MaterialDropDownDemo extends Component {
  state = {
    sampleText: '',
    fontSize: 12,
  };
  _changeHandler = (value) => {
    this.setState({
      sampleText: value,
      textColorName: 'black',
    });
  };

  _changeColorName = (item, index) => {
    this.setState({
      textColorName: item.toLowerCase(),
    });
  };

  _changeFontSize = (item, index) => {
    this.setState({
      fontSize: item,
    });
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <TextInput
            label="Sample Text"
            value={this.state.sampleText}
            onChangeText={(value) => this._changeHandler(value)}
          />
          <Dropdown label="Typography" data={DATA} />
          <View style={styles.innerContainer}>
            <View style={styles.innerView1}>
              <Dropdown
                label="Color Name"
                data={COLOR}
                onChangeText={(item, index) =>
                  this._changeColorName(item, index)
                }
              />
            </View>
            <View style={styles.innerView2}>
              <Dropdown
                label="Font Size"
                data={FONTSIZE}
                onChangeText={(item, index) =>
                  this._changeFontSize(item, index)
                }
              />
            </View>
          </View>

          <Card>
            <Card.Content>
              <Title>
                <Paragraph
                  style={[
                    styles.title,
                    {
                      color: this.state.textColorName,
                      fontSize: this.state.fontSize,
                    },
                  ]}>
                  {this.state.sampleText}
                </Paragraph>
              </Title>
            </Card.Content>
          </Card>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  innerView1: {
    flex: 7,
  },
  innerView2: {
    flex: 3,
  },
  title: {},
});
