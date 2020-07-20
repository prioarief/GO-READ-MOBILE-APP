import React, {Component} from 'react';
import {
  ImageBackground,
  Picker,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import {cover} from '../../assets';
import {Card} from '../../components';
import {getBook} from '../../redux/actions/book';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book.value || [],
      keyword: '',
      sort: 'latest',
    };
  }
  fetchBook = async (search, sort) => {
    await this.props
      .dispatch(getBook(this.props.auth.data.token, search, sort))
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>Book List</Text>
            {/* <Button
              title="SORT"
              onPress={async () => {
                await this.setState({sort: 'title-desc'});
                this.fetchBook('', this.state.sort).then((res) => {
                  // console.log(this.props.book.value);
                  this.setState({book: this.props.book.value});
                });
              }}
            /> */}
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
            {this.state.book
              ? this.state.book.map((data) => {
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
});
