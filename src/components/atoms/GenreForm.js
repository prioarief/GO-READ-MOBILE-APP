import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {
  EditGenre,
  getGenre,
  deleteGenre,
  insertGenre,
} from '../../redux/actions/genre';

const GenreForm = ({data, dispatch, auth, genre, navigation}) => {
  const [Genre, setGenre] = useState(data.name || '');
  const [Token] = useState(auth.data.token);
  const title = data.id === null ? true : false;

  const handleAdd = async () => {
    const dataGenre = {
      genre: Genre,
    };
    await dispatch(insertGenre(Token, dataGenre))
      .then(async (res) => {
        await dispatch(getGenre(Token)).then(async () => {
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async () => {
    await dispatch(deleteGenre(Token, data.id))
      .then(async (res) => {
        await dispatch(getGenre(Token)).then(async () => {
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = async () => {
    const dataGenre = {
      genre: Genre,
    };
    await dispatch(EditGenre(Token, data.id, dataGenre))
      .then(async (res) => {
        await dispatch(getGenre(Token)).then(async () => {
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <Text style={styles.title}>
        {title ? `Add ${data.type}` : `Edit ${data.type}`}
      </Text>
      <Input
        value={Genre}
        placeholder="Genre"
        onChangeText={(input) => setGenre(input)}
        leftIcon={<Icon name="tags" size={24} color="black" />}
      />
      <Button
        title={title ? `Add ${data.type}` : `Edit ${data.type}`}
        onPress={() => (title ? handleAdd() : handleEdit())}
      />

      {!title && (
        <Button
          containerStyle={styles.containerButton}
          buttonStyle={styles.button_delete}
          title="Delete"
          onPress={() => handleDelete()}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  genre: state.genre,
});

export default connect(mapStateToProps)(GenreForm);

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button_delete: {backgroundColor: 'red'},
  containerButton: {marginTop: 10},
});
