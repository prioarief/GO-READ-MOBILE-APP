import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {Borrow} from '../../redux/actions/transaction';
import {getBook} from '../../redux/actions/book';
import Date from '../../utils/Date';
import {showMessage} from 'react-native-flash-message';
import {APP_API_URL} from '@env';

class DetailBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
      disable: true,
      btn_loading: false,
    };
  }
  getDetailBook = async () => {
    const data = this.props.book.value;
    const filterData = data.filter((e) => {
      return e.id === this.props.route.params.id;
    });

    await this.setState({book: filterData[0]});
  };

  handleBorrow = async (id) => {
    this.setState({btn_loading: true});
    await this.props
      .dispatch(Borrow(this.props.auth.data.token, id))
      .then(async (res) => {
        await this.props.dispatch(getBook(this.props.auth.data.token));
        await this.getDetailBook();
        await this.setDisable();
        this.setState({btn_loading: false});
        showMessage({
          message: 'Borrow success',
          type: 'success',
          backgroundColor: 'green',
          color: 'white',
        });
        this.props.navigation.navigate('MainApp');
      });
  };

  setDisable = async () => {
    if (
      this.state.book.status === 'Available' &&
      this.props.auth.data.role === 'User'
    ) {
      return await this.setState({disable: false});
    }
  };

  async componentDidMount() {
    await this.getDetailBook();
    await this.setDisable();
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.main}
            blurRadius={1}
            source={{
              uri: `${APP_API_URL}/images/${this.state.book.image}`,
            }}>
            <Icon
              name="angle-left"
              style={styles.icon_back}
              size={30}
              color="black"
              onPress={() => this.props.navigation.replace('MainApp')}
            />
          </ImageBackground>
          <View style={styles.detail}>
            <View style={styles.content}>
              <Image
                source={{
                  uri: `${APP_API_URL}/images/${this.state.book.image}`,
                }}
                style={styles.image}
              />
              <Text style={styles.title}>{this.state.book.title}</Text>
              <Text style={styles.author}>By {this.state.book.author}</Text>
            </View>
            <Text style={styles.description_header}>Published At</Text>
            <Text style={styles.description}>
              {Date(this.state.book.created_at)}
            </Text>
            <Text style={styles.description_header}>Genre</Text>
            <Text style={styles.description}>{this.state.book.genre}</Text>
            <Text style={styles.description_header}>Description</Text>
            <Text style={styles.description}>
              {this.state.book.description}
            </Text>
            {!this.state.disable && (
              <Button
                loading={this.state.btn_loading}
                title="BORROW"
                icon={<Icon name="bookmark-o" size={24} color="white" />}
                buttonStyle={styles.button_style}
                titleStyle={styles.button_title}
                containerStyle={styles.button}
                onPress={async () => {
                  this.handleBorrow(this.state.book.id);
                }}
              />
            )}
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
    // backgroundColor: '#e69c1c',
    height: 240,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon_back: {padding: 20},
  content: {
    alignItems: 'center',
    maxHeight: 400,
    marginTop: -130,
    marginBottom: 20,
    // backgroundColor: '#e69c1c',
  },
  image: {
    width: 160,
    height: 220,
    borderRadius: 20,
  },
  title: {
    color: 'black',
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
    color: 'black',
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
    backgroundColor: '#eaeaea',
    padding: 20,
  },
  button_style: {
    backgroundColor: '#363533',
    width: 250,
    borderRadius: 10,
  },
  button: {alignItems: 'center', marginVertical: 20},
  button_title: {paddingLeft: 10},
  button_disable: {
    backgroundColor: 'red',
    width: 250,
    borderRadius: 10,
    color: 'white',
  },
});
