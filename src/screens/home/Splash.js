import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Logo} from '../../assets';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.auth.data.token) {
        return this.props.navigation.replace('MainApp', {
          role: this.props.auth.data.role,
        });
      }
      this.props.navigation.replace('GetStarted');
    }, 2000);
  }
  render() {
    return (
      <View style={styles.logo}>
        <Logo />
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
});

export default connect(mapStateToProps)(Splash);

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#eaeaea',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
