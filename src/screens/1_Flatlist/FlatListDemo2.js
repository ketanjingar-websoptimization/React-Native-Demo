import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
} from 'react-native';

export default class FlatListDemo2 extends React.Component {
  render() {
    const DATA = [
      {
        id: '1',
        pic: 'ketan.jpg',
        name: 'Ketan Jingar',
        phone: '8160626880',
        date: new Date(),
      },
      {
        id: '2',
        pic: 'ketan.jpg',
        name: 'Abhishek Thakkar',
        phone: '8866088492',
        date: new Date(),
      },
      {
        id: '3',
        pic: 'ketan.jpg',
        name: 'Dhruv Sutail',
        phone: '8460999499',
        date: new Date(),
      },
    ];

    const Item = ({id, pic, name, phone, date}) => {
      return (
        <View style={styles.itemMainContainer}>
          <View style={styles.itemContainer}>
            <Image
              source={require('@assets/images/ketan.jpg')}
              style={styles.image}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.name}>{name}</Text>
              <Text>{phone}</Text>
              <Text>{date.toString()}</Text>
            </View>
          </View>
        </View>
      );
    };

    const renderItem = ({item}) => {
      return (
        <Item
          id={item.id}
          pic={item.pic}
          name={item.name}
          phone={item.phone}
          date={item.date}
        />
      );
    };

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <View>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {},
  itemMainContainer: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'powderblue',
  },
  name: {
    fontSize: 18,
    fontFamily: 'arial',
  },
  image: {
    marginRight: 12,
    height: 60,
    width: 60,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
