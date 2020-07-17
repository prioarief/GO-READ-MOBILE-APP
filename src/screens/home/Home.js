import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {cover} from '../../assets';
import {Card} from '../../components';
import {getBook} from '../../redux/actions/book';
import Axios from 'axios';
import {Button} from 'react-native';

const Home = (props) => {
  // console.log(props);
  // useEffect(() => {}, []);

  const book = [
    {
      title: 'Dilan Dan Milea Film Bucin 1991 1',
    },
    {
      title: 'Dilan Dan Milea Film Bucin 1991 2',
    },
    {
      title: 'Dilan Dan Milea Film Bucin 1991 3',
    },
    {
      title: 'Dilan Dan Milea Film Bucin 1991 4',
    },
    {
      title: 'Dilan Dan Milea Film Bucin 1991 5',
    },
    {
      title: 'Dilan Dan Milea Film Bucin 1991 6',
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground source={cover} style={styles.background}>
        <TextInput style={styles.search} placeholder="Book Title...." />
      </ImageBackground>
      <View style={styles.content}>
        <Button
          title="Oke"
          onPress={() => {
            props.dispatch(getBook()).then((res) => {
              console.log(res);
            });
          }}
        />
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Book List</Text>
          {book.map((data) => {
            return (
              <Card
                key={data.title}
                title={data.title}
                onPress={() => {
                  props.navigation.navigate('Detail', {title: data.title});
                  Axios({
                    method: 'POST',
                    url: 'http://192.168.43.81:3000/api/books',
                  })
                    .then((res) => {
                      console.log(res.data.data);
                    })
                    .catch((err) => {
                      console.log(err.response.data.data);
                    });
                  // props.dispatch(tes());
                }}
              />
            );
          })}
        </ScrollView> */}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  book: state.book,
});

export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7dae0',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -20,
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    fontSize: 29,
    textAlign: 'center',
    marginBottom: 20,
    // fontFamily: 'Rubik-Black',
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
