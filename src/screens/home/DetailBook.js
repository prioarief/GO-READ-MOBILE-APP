import moment from 'moment';
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {detailBook, getBook} from '../../redux/actions/book';
import {Borrow} from '../../redux/actions/transaction';

class DetailBook extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  getDetailBook = async () => {
    await this.props
      .dispatch(
        detailBook(this.props.auth.data.token, this.props.route.params.id),
      )
      .then(async () => {
        // this.props.dispatch({type: 'BOOK'});
        await this.props.dispatch(getBook(this.props.auth.data.token));
      });
  };

  componentDidMount() {
    this.getDetailBook();
  }

  componentDidUpdate() {
    // console.log('did update');
  }

  render() {
    const disabled =
      this.props.book.detail[0].status === 'Borrowed' ? true : false;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.main}>
            <Icon
              name="angle-left"
              style={styles.icon_back}
              size={30}
              color="black"
              onPress={() => this.props.navigation.replace('MainApp')}
            />
            <View style={styles.content}>
              <Image
                source={{
                  uri: `http://192.168.43.81:3000/images/${this.props.book.detail[0].image}`,
                }}
                style={styles.image}
              />
              <Text style={styles.title}>
                {this.props.book.detail[0].title}
              </Text>
              <Text style={styles.author}>
                By {this.props.book.detail[0].author}
              </Text>
            </View>
          </View>
          <View style={styles.detail}>
            {!disabled && (
              <Button
                title="BORROW"
                icon={<Icon name="bookmark-o" size={24} color="white" />}
                buttonStyle={styles.button_style}
                titleStyle={styles.button_title}
                containerStyle={styles.button}
                onPress={async () => {
                  await this.props
                    .dispatch(
                      Borrow(
                        this.props.auth.data.token,
                        this.props.book.detail[0].id,
                      ),
                    )
                    .then((res) => {
                      this.props.navigation.navigate('Detail', {
                        id: this.props.book.detail[0].id,
                      });
                    });
                }}
              />
            )}
            <Text style={styles.description_header}>Published At</Text>
            <Text style={styles.description}>
              {moment(this.props.book.detail[0].created_at).format(
                'DD MMMM YYYY',
              )}
            </Text>
            <Text style={styles.description_header}>Genre</Text>
            <Text style={styles.description}>
              {this.props.book.detail[0].genre}
            </Text>
            <Text style={styles.description_header}>Description</Text>
            <Text style={styles.description}>
              {this.props.book.detail[0].description}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
});

// const mapDispatchToProps = {detailBook};

export default connect(mapStateToProps)(DetailBook);

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
  button_disable: {
    backgroundColor: 'red',
    width: 250,
    borderRadius: 10,
    color: 'white',
  },
});
