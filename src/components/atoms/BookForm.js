/* eslint-disable react-hooks/exhaustive-deps */
import {Picker} from '@react-native-community/picker';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {getAuthor} from '../../redux/actions/author';
import {
  deleteBook,
  editBook,
  getBook,
  insertBook,
} from '../../redux/actions/book';
import {getGenre} from '../../redux/actions/genre';

const BookForm = ({data, dispatch, auth, book, genre, author, navigation}) => {
  const [Book, setBook] = useState({
    title: '',
    description: '',
    image: null,
    genre_id: null,
    author_id: null,
    status: '',
  });
  const [Genre, setGenre] = useState(genre.value || '');
  const [Author, setAuthor] = useState(author.value || '');
  const [Token] = useState(auth.data.token);
  const title = data.id === null ? true : false;

  const getDetail = async () => {
    const dataBook = book.value;
    const filterData = dataBook.filter((e) => {
      return e.id === data.id;
    });

    setBook({
      title: filterData[0].title,
      description: filterData[0].description,
      image: filterData[0].image,
      genre_id: filterData[0].genre_id,
      author_id: filterData[0].author_id,
    });
  };

  const handleAdd = async () => {
    const dataBook = new FormData();
    dataBook.append('title', Book.title);
    dataBook.append('description', Book.description);
    dataBook.append('image', {
      uri: Book.image.uri,
      type: Book.image.type,
      name: Book.image.fileName,
    });
    dataBook.append('genre_id', Book.genre_id);
    dataBook.append('author_id', Book.author_id);
    dataBook.append('status', 'Available');

    await dispatch(getAuthor(Token)).then(async () => {
      await setAuthor(author.value);
    });
    await dispatch(getGenre(Token)).then(async () => {
      setGenre(genre.value);
    });
    await dispatch(insertBook(Token, dataBook))
      .then(async (res) => {
        await dispatch(getBook(Token)).then(async () => {
          await dispatch(getAuthor(Token));
          await dispatch(getGenre(Token));
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async () => {
    await dispatch(getAuthor(Token)).then(async () => {
      await setAuthor(author.value);
    });
    await dispatch(getGenre(Token)).then(async () => {
      setGenre(genre.value);
    });
    await dispatch(deleteBook(Token, data.id))
      .then(async (res) => {
        await dispatch(getBook(Token)).then(async () => {
          await dispatch(getAuthor(Token));
          await dispatch(getGenre(Token));
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = async () => {
    // console.log(typeof Book.image);
    const dataBook = new FormData();
    dataBook.append('title', Book.title);
    dataBook.append('description', Book.description);
    typeof Book.image === 'String'
      ? dataBook.append('image', Book.image)
      : dataBook.append('image', {
          uri: Book.image.uri,
          type: Book.image.type,
          name: Book.image.fileName,
        });
    dataBook.append('genre_id', Book.genre_id);
    dataBook.append('author_id', Book.author_id);
    dataBook.append('status', 'Available');

    await dispatch(getAuthor(Token)).then(async () => {
      await setAuthor(author.value);
    });
    await dispatch(getGenre(Token)).then(async () => {
      setGenre(genre.value);
    });
    await dispatch(editBook(Token, data.id, dataBook))
      .then(async (res) => {
        await dispatch(getBook(Token)).then(async () => {
          await dispatch(getAuthor(Token));
          await dispatch(getGenre(Token));
          await navigation.navigate('MainApp');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGenre = (value) => {
    setBook({...Book, genre_id: value});
  };

  const handleAuthor = (value) => {
    setBook({...Book, author_id: value});
  };

  const handleImage = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setBook({...Book, image: response});
      }
    });
  };

  useEffect(() => {
    title ? null : getDetail();
  }, []);

  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>
          {title ? `Add ${data.type}` : `Edit ${data.type}`}
        </Text>
        <Input
          value={Book.title}
          placeholder="Title"
          onChangeText={(input) => setBook({...Book, title: input})}
        />

        <Text style={styles.sort_header}>Genre</Text>
        <Picker
          mode="dropdown"
          selectedValue={Book.genre_id}
          style={styles.sort_dropdown}
          onValueChange={(itemValue) => handleGenre(itemValue)}>
          <Picker.Item label="Select Genre" value={null} />
          {Genre ? (
            Genre.map((a) => {
              return <Picker.Item key={a.id} label={a.genre} value={a.id} />;
            })
          ) : (
            <Picker.Item label="Select Genre" value={null} />
          )}
        </Picker>

        <Text style={styles.sort_header}>Author</Text>
        <Picker
          mode="dropdown"
          selectedValue={Book.author_id}
          style={styles.sort_dropdown}
          onValueChange={(itemValue) => handleAuthor(itemValue)}>
          <Picker.Item label="Select Author" value={null} />
          {Author ? (
            Author.map((a) => {
              return <Picker.Item key={a.id} label={a.author} value={a.id} />;
            })
          ) : (
            <Picker.Item label="Select Author" value={null} />
          )}
        </Picker>

        <Input
          placeholder="Description"
          value={Book.description}
          onChangeText={(input) => setBook({...Book, description: input})}
        />

        {Book.image && (
          <Image
            source={{
              uri:
                Book.image.uri ||
                `http://192.168.43.81:3000/images/${Book.image}`,
            }}
            style={{width: 300, height: 300}}
          />
        )}

        <Button
          title="Select Image"
          containerStyle={{width: 150, marginVertical: 20}}
          buttonStyle={{backgroundColor: 'black'}}
          onPress={() => handleImage()}
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
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  book: state.book,
  author: state.author,
  genre: state.genre,
});

export default connect(mapStateToProps)(BookForm);

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
