import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getHistory, Return} from '../../redux/actions/transaction';
import {ListHistory} from '../../components';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.transaction.history || [],
      token: this.props.auth.data.token,
    };
  }
  fetchHistory = () => {
    this.props
      .dispatch(getHistory(this.state.token))
      .then((res) => {
        this.setState({book: this.props.transaction.history});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleReturn = async (id) => {
    await this.props
      .dispatch(Return(this.state.token, id))
      .then(async (res) => {
        await this.fetchHistory();
        // this.setState({book: this.props.transaction.history});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.fetchHistory();
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Borrow History</Text>
          <View style={styles.content}>
            {this.state.book.map((data) => {
              return (
                <ListHistory
                  key={data.id}
                  title={data.title}
                  borrowed={data.borrowed_at}
                  returned={data.returned_at}
                  image={data.image}
                  onPress={() => {
                    this.handleReturn(data.id);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
  transaction: state.transaction,
});

export default connect(mapStateToProps)(History);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7dae0',
    flexDirection: 'column',
  },
  content: {
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
    fontSize: 29,
    textAlign: 'center',
    // fontFamily: 'Rubik-Black',
  },
});
