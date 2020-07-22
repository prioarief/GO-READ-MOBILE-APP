import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GenreForm from '../atoms/GenreForm';
import AuthorForm from '../atoms/AuthorForm';

const FormData = (props) => {
  const Form = ({type}) => {
    if (type.type === 'Genre') {
      return <GenreForm data={type} navigation={props.navigation} />;
    }
    if (type.type === 'Author') {
      return <AuthorForm data={type} navigation={props.navigation} />;
    }
    if (type.type === 'Book') {
      return <GenreForm data={type} navigation={props.navigation} />;
    }
    return <Text>Not Found</Text>;
  };

  return (
    <View style={styles.container}>
      <Form type={props.route.params} />
    </View>
  );
};

export default FormData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 20,
  },
});
