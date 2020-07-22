import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {Chart, CardDashboard} from '../../components';

class Dashboard extends Component {
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

  showData = (content) => {
    this.props.navigation.navigate('Manage Data', {content: content});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.topbar}>
            <Text style={styles.dashboard}>Dashboard</Text>
            <Text style={styles.user}>Prio Arief Gunawan</Text>
          </View>
          <TouchableOpacity style={styles.logout}>
            <Text style={styles.logouttext}>Logout</Text>
            <Icon name="sign-out-alt" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Chart />
            <View style={styles.card}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <CardDashboard
                  title="Book Data"
                  icon="book"
                  background="#0547ad"
                  color="white"
                  total={this.props.book.count}
                  onPress={() => this.showData('Book')}
                />
                <CardDashboard
                  title="Genre Data"
                  icon="tags"
                  background="red"
                  color="white"
                  total={this.props.genre.value.length}
                  onPress={() => this.showData('Genre')}
                />
                <CardDashboard
                  title="Author Data"
                  icon="feather"
                  background="green"
                  color="white"
                  total={this.props.author.value.length}
                  onPress={() => this.showData('Author')}
                />
                <CardDashboard
                  title="Admin Data"
                  icon="users-cog"
                  background="purple"
                  color="white"
                  total={this.props.genre.value.length}
                  onPress={() => this.showData('Admin')}
                />
                <CardDashboard
                  title="User Data"
                  icon="users"
                  background="orange"
                  color="white"
                  total={this.props.genre.value.length}
                  onPress={() => this.showData('User')}
                />
                <CardDashboard
                  title="Loan History"
                  icon="chart-line"
                  background="black"
                  color="white"
                  total={this.props.genre.value.length}
                  onPress={() => this.showData('History')}
                />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
  author: state.author,
  genre: state.genre,
});

export default connect(mapStateToProps)(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7dae0',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 20,
    marginTop: -20,
    flexDirection: 'column',
    alignContent: 'center',
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
    height: 130,
    backgroundColor: 'navy',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topbar: {flexDirection: 'column'},
  dashboard: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Rubik-Medium',
  },
  user: {
    color: 'white',
  },
  logout: {flexDirection: 'row'},
  logouttext: {color: 'white', paddingRight: 4},
  card: {flexDirection: 'row', marginVertical: 20},
});
