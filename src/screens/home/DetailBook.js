import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {dilan} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

const DetailBook = (props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.main}>
          <Icon
            name="angle-left"
            style={styles.icon_back}
            size={30}
            color="black"
            onPress={() => props.navigation.navigate('MainApp')}
          />
          <View style={styles.content}>
            <Image source={dilan} style={styles.image} />
            <Text style={styles.title}>{props.route.params.title}</Text>
            <Text style={styles.author}>By Prio Arief Gunawan</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Button
            title="BORROW"
            icon={<Icon name="bookmark-o" size={24} color="white" />}
            buttonStyle={styles.button_style}
            titleStyle={styles.button_title}
            containerStyle={styles.button}
          />
          <Text style={styles.description_header}>Published At</Text>
          <Text style={styles.description}>July 16th 2020</Text>
          <Text style={styles.description_header}>Genre</Text>
          <Text style={styles.description}>Horror</Text>
          <Text style={styles.description_header}>Description</Text>
          <Text style={styles.description}>
            You asked, Font Awesome delivers with 41 shiny new icons in version
            4.7. Want to request new icons? Here's how. Need vectors or want to
            use on the desktop? Check the cheatsheet.{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    backgroundColor: '#e69c1c',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon_back: {padding: 20},
  content: {
    alignItems: 'center',
    height: 380,
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 20,
    shadowColor: 'red',
    shadowOffset: {height: 12},
    shadowOpacity: 1,
  },
  title: {
    color: 'white',
    fontSize: 27,
    marginTop: 10,
    maxWidth: 300,
    textAlign: 'center',
    fontFamily: 'Nunito-Bold',
  },
  description: {
    color: 'black',
    fontSize: 17,
    marginTop: 5,
    maxWidth: 400,
    textAlign: 'left',
  },
  description_header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 23,
    marginTop: 10,
    maxWidth: 400,
    textAlign: 'left',
  },
  author: {
    color: 'white',
    fontSize: 18,
    margin: 2,
    maxWidth: 400,
    textAlign: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 20,
    maxWidth: 400,
    textAlign: 'left',
  },
  detail: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  button_style: {
    backgroundColor: '#363533',
    width: 250,
    borderRadius: 10,
  },
  button: {alignItems: 'center', marginTop: -40},
  button_title: {paddingLeft: 10},
});
