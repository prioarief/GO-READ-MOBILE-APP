import React, {Component} from 'react';
import {Picker} from '@react-native-community/picker';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {SearchBar, Text as Heading} from 'react-native-elements';
import {connect} from 'react-redux';
import {cover} from '../../assets';
import {Card} from '../../components';
import {getBook} from '../../redux/actions/book';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book.value || 'Data not found',
      keyword: '',
      page: 1,
      sort: 'latest',
      loading: false,
    };
  }
  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    // console.log(contentSize.height - paddingToBottom);
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  fetchBook = async (search, sort, page) => {
    await this.props
      .dispatch(getBook(this.props.auth.data.token, search, sort, page))
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchBook('', this.state.sort);
  }

  handleSearch = () => {
    this.fetchBook(this.state.keyword).then(() => {
      this.setState({book: this.props.book.value});
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={cover} style={styles.background}>
          <SearchBar
            placeholder="Type here"
            inputContainerStyle={styles.search_input}
            containerStyle={styles.search}
            value={this.state.keyword}
            onChangeText={(keyword) => this.setState({keyword: keyword})}
            lightTheme={true}
            round={true}
            showLoading={true}
            onBlur={() => {
              this.handleSearch();
            }}
          />
        </ImageBackground>
        <View style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={async ({nativeEvent}) => {
              if (this.isCloseToBottom(nativeEvent)) {
                // await this.setState({loading: true});
                const data = this.state;
                await this.setState({page: data.page + 1});
                await console.log(data.page);
                // await this.setState({loading: false});
                // if (data.loading) {
                // }
                // setTimeout(async () => {
                //   // this.fetchBook(data.keyword, data.sort, data.page);
                //   // console.log('a');
                // }, 500);
                // console.log('bb');
              }
            }}
            scrollEventThrottle={200}>
            <Text style={styles.title}>Book List</Text>
            <View style={styles.sort}>
              <Text style={styles.sort_header}>Sort</Text>
              <Picker
                mode="dropdown"
                selectedValue={this.state.sort}
                style={styles.sort_dropdown}
                onValueChange={async (itemValue, itemIndex) => {
                  await this.setState({sort: itemValue});
                  this.fetchBook(this.state.keyword, this.state.sort).then(
                    () => {
                      this.setState({book: this.props.book.value});
                    },
                  );
                }}>
                <Picker.Item label="Latest" value="latest" />
                <Picker.Item label="A-Z" value="title-asc" />
                <Picker.Item label="Z-A" value="title-desc" />
              </Picker>
            </View>
            {this.state.book !== 'Data not found' ? (
              this.state.book ? (
                this.state.book.map((data) => {
                  return (
                    <Card
                      key={data.id}
                      title={data.title}
                      description={data.description}
                      image={`http://192.168.43.81:3000/images/${data.image}`}
                      onPress={async () => {
                        this.props.navigation.navigate('Detail', {id: data.id});
                      }}
                    />
                  );
                })
              ) : null
            ) : (
              <Heading h4 style={styles.notfound}>
                Not Found
              </Heading>
            )}
            {this.state.loading && (
              <ActivityIndicator size="large" color="red" />
            )}
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
  },
  background: {
    height: 110,
  },
  search: {
    marginTop: 10,
    width: 300,
    marginLeft: 25,
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  search_input: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  sort: {
    flexDirection: 'row',
    paddingLeft: 150,
  },
  sort_dropdown: {height: 50, width: 140, marginLeft: 30},
  sort_header: {marginTop: 15},
  notfound: {textAlign: 'center', color: 'red'},
});
