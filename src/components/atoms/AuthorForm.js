import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {
  deleteAuthor,
  editAuthor,
  getAuthor,
  insertAuthor,
} from '../../redux/actions/author';
import {getBook} from '../../redux/actions/book';
import {getGenre} from '../../redux/actions/genre';
import Loading from '../molecules/Loading';

const AuthorForm = ({data, dispatch, auth, author, navigation}) => {
  const [showLoading, setLoading] = useState(false);
  const [Author, setAuthor] = useState(data.name || '');
  const [Token] = useState(auth.data.token);
  const title = data.id === null ? true : false;

  const handleAdd = async () => {
    setLoading(true);
    const dataAuthor = {
      author: Author,
    };
    await dispatch(insertAuthor(Token, dataAuthor))
      .then(async (res) => {
        await dispatch(getAuthor(Token)).then(async () => {
          await dispatch(getGenre(Token));
          await dispatch(getBook(Token));
          setLoading(false);
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deleteAuthor(Token, data.id))
      .then(async (res) => {
        await dispatch(getAuthor(Token)).then(async () => {
          await dispatch(getBook(Token));
          await dispatch(getGenre(Token));
          setLoading(false);
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleEdit = async () => {
    setLoading(true);
    const dataAuthor = {
      author: Author,
    };
    await dispatch(editAuthor(Token, data.id, dataAuthor))
      .then(async (res) => {
        await dispatch(getAuthor(Token)).then(async () => {
          await dispatch(getBook(Token));
          await dispatch(getGenre(Token));
          setLoading(false);
          // showMessage({
          //   message: res,
          //   type: 'success',
          //   backgroundColor: 'green',
          //   color: 'white',
          // });
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      <View>
        <Text style={styles.title}>
          {title ? `Add ${data.type}` : `Edit ${data.type}`}
        </Text>
        <Input
          value={Author}
          placeholder="Author"
          onChangeText={(input) => setAuthor(input)}
          leftIcon={<Icon name="feather" size={24} color="black" />}
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
      {showLoading && <Loading />}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  genre: state.genre,
});

export default connect(mapStateToProps)(AuthorForm);

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
