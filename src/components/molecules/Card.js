import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {dilan} from '../../assets';

const CardComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={dilan} style={styles.image} />
      <View>
        <Text style={styles.title}>Dilan Bucin 1991</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          dolore exercitationem
        </Text>
      </View>
    </View>
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
  image: {
    width: 100,
    height: 100,
    paddingBottom: 100,
    borderRadius: 15,
  },
  title: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    // paddingTop: 5,
    fontSize: 20,
    maxWidth: 200,
  },
  description: {
    paddingHorizontal: 20,
    paddingTop: 5,
    fontSize: 12,
    maxWidth: 250,
  },
});
