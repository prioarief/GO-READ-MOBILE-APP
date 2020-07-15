import React, {Component} from 'react';
import {StyleSheet, View, ImagePropTypes} from 'react-native';
import {Logo} from '../../assets';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   getStarted: null,
    // };
  }

  componentDidMount() {
    setTimeout(() => {
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

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#eaeaea',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStarted: {
    marginTop: 40,
    backgroundColor: '#26C6DA',
    paddingHorizontal: 40,
    borderRadius: 15,
    // transform: '1s',
  },
});
