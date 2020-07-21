import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {getBook} from '../../redux/actions/book';
import {ListHistory} from '../../components';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.book.value || [],
    };
  }
  fetchHistory = () => {
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
    this.fetchHistory();
    console.log(this.state.book);
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Borrow History</Text>
          <View style={styles.content}>
            <ListHistory
              title="Dilan"
              borrowed="20 July 2021"
              returned="20 Agustus 2021"
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned="20 Agustus 2021"
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned="20 Agustus 2021"
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned="20 Agustus 2021"
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned={null}
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned={null}
            />
            <ListHistory
              title="Dilan"
              status="Borrowed"
              borrowed="20 July 2021"
              returned={null}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
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
