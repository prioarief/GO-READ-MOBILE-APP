import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../../assets';

export default class Splash extends Component {
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
});
