import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {cover} from '../../assets';
import {Card} from '../../components';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} style={styles.background}>
        <TextInput style={styles.search} placeholder="Book Title...." />
      </ImageBackground>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Book List</Text>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7dae0',
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -20,
  },
  card: {
    borderRadius: 20,
    paddingVertical: 0,
    // width: 500,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    fontSize: 29,
    textAlign: 'center',
    marginBottom: 20,
  },
  background: {
    height: 170,
  },
  search: {
    backgroundColor: 'white',
    width: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: 'black',
    marginLeft: 50,
    marginTop: 70,
  },
});
