import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Data} from '../../components';

const Manage = (props) => {
  return (
    <View style={styles.container}>
      <Data type={props.route.params.content} navigate={props.navigation} />
    </View>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eaeaea',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
