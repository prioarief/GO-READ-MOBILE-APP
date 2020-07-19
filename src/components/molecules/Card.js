import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {dilan} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CardComponent = ({title, image, description, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 40,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  content: {
    marginBottom: 40,
  },
  image: {
    width: 100,
    height: 120,
    paddingBottom: 100,
    borderRadius: 15,
  },
  title: {
    paddingHorizontal: 20,
    paddingTop: 10,
    fontSize: 20,
    maxWidth: 200,
    fontFamily: 'Rubik-Medium',
  },
  description: {
    fontFamily: 'Rubik-Reguler',
    paddingHorizontal: 20,
    paddingTop: 5,
    fontSize: 14,
    maxWidth: 250,
  },
});
