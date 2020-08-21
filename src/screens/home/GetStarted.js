import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {cover} from '../../assets';
import {APP_API_URL} from '@env';

export default class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getStarted: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({getStarted: true});
    }, 2000);
  }
  render() {
    return (
      <ImageBackground source={cover} style={styles.logo}>
        <Text style={styles.title}>Book is a window to the world</Text>
        <View>
          {this.state.getStarted && (
            <Button
              titleStyle={styles.getStartedTitle}
              buttonStyle={styles.getStarted}
              title="Get Started"
              onPress={() => this.props.navigation.replace('Login')}
            />
          )}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#eaeaea',
    flex: 1,
    // alignItems: 'center',
    padding: 40,
    justifyContent: 'space-between',
  },
  getStarted: {
    marginTop: 40,
    backgroundColor: 'white',
    paddingHorizontal: 40,
    borderRadius: 15,
    // transform: '1s',
  },
  getStartedTitle: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    color: 'white',
    fontWeight: '100',
    fontSize: 50,
    textShadowColor: 'black',
  },
});
