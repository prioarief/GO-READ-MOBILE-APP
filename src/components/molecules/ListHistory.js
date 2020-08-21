import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Date from '../../utils/Date';
import {APP_API_URL} from '@env';

const ListHistory = ({onPress, title, borrowed, returned, image}) => {
  const Content = ({status}) => {
    if (status === null) {
      return (
        <>
          <Text style={styles.header}>Status</Text>
          <Text style={styles.desc}>borrowed</Text>
          <Button
            title="Return"
            containerStyle={styles.button_return}
            onPress={onPress}
          />
        </>
      );
    } else {
      return (
        <>
          <Text style={styles.header}>Date of return</Text>
          <Text style={styles.desc}>{Date(status)}</Text>
        </>
      );
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `${APP_API_URL}/images/${image}`,
        }}
        style={styles.img}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.header}>Date of loan</Text>
        <Text style={styles.desc}>{Date(borrowed)}</Text>
        <Content status={returned} />
      </View>
    </View>
  );
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.57,
    shadowRadius: 10.19,

    elevation: 19,
  },
  content: {
    flexDirection: 'column',
    padding: 10,
  },
  img: {
    width: 140,
    height: 190,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
    maxWidth: 150,
  },
  borrowed: {
    maxWidth: 200,
    textAlign: 'justify',
  },
  desc: {
    // fontWeight: 'bold',
    paddingLeft: 10,
  },
  header: {
    fontWeight: 'bold',
    // paddingLeft: 10,
  },
  button_return: {
    marginTop: 10,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
