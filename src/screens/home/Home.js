/* eslint-disable react-hooks/exhaustive-deps */
import Axios from 'axios';
import React, {useEffect, useState, Component} from 'react';
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
import {getBook, detailBook} from '../../redux/actions/book';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book.value || [],
    };
  }
  fetchBook = () => {
    this.props
      .dispatch(getBook())
      .then((res) => {
        // this.setState({book: 'res'});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchBook;
    console.log(this.state.book);
  }
  // useEffect(() => {
  //   fetchBook();
  // }, []);

  // useEffect(() => {
  //   fetchBook();
  // }, [props.book]);
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={cover} style={styles.background}>
          <TextInput style={styles.search} placeholder="Book Title...." />
        </ImageBackground>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Book List</Text>
            {this.state.book
              ? this.state.book.map((data) => {
                  return (
                    <Card
                      key={data.title}
                      title={data.title}
                      description={data.description}
                      image={`http://192.168.43.81:3000/images/${data.image}`}
                      onPress={async () => {
                        // await fetchDetailBook(data.id);
                        // await fetchBook();
                        this.props.navigation.navigate('Detail', {id: data.id});
                        // await fetchDetailBook(data.id).then((res) => {
                        //   console.log(res);
                        //   fetchBook();
                        // });
                      }}
                    />
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
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
    height: 110,
  },
  search: {
    backgroundColor: 'white',
    width: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: 'black',
    marginLeft: 30,
    marginTop: 20,
  },
});
