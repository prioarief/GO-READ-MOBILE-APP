import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';
import {dilan} from '../../assets';

const Book = () => {
  return (
    <View style={styles.container}>
      <Text>Book</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'column',
  },
  card: {
    // maxWidth: 200,
  },
});
