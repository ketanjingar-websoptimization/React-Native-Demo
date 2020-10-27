import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  View,
  Dimensions,
  Platform,
} from 'react-native';

import {Card} from 'react-native-elements';

const DATA = [
  {id: '1', title: 'One'},
  {id: '2', title: 'Two'},
  {id: '3', title: 'Three'},
];

const Item = (item) => {
  return (
    <Card style={{elevation: 10, backgroundColor: 'red'}}>
      <Card.Title style={styles.cardTitle}>{item.id}</Card.Title>
      <Card.Divider />
      <View>
        <Text style={styles.description}>{item.title}</Text>
      </View>
    </Card>
  );
};
export default function CardDemo() {
  const renderItem = ({item}) => <Item title={item.title} id={item.id} />;
  return (
    <View style={styles.containerMain}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: 18,
  },
});
