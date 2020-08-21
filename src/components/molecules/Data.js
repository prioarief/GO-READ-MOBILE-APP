/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {ListItem, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getBook} from '../../redux/actions/book';
import {getGenre} from '../../redux/actions/genre';
import {getAuthor} from '../../redux/actions/author';
import {APP_API_URL} from '@env';

const Data = (props) => {
  const [Genre, setGenre] = useState(props.genre.value || '');
  const [Author, setAuthor] = useState(props.author.value || '');
  const [Book, setBook] = useState(props.book.value || '');

  const AddData = (type, id, name) => {
    props.navigate.navigate('FormData', {id: id, type: type, name: name});
  };

  const fetchBook = async () => {
    await props.dispatch(getBook(props.auth.data.token)).then(async () => {
      await setBook(props.book.value);
    });
  };

  const fetchGenre = async () => {
    await props.dispatch(getGenre(props.auth.data.token)).then(async () => {
      await setGenre(props.genre.value);
    });
  };

  const fetchAuthor = async () => {
    await props.dispatch(getAuthor(props.auth.data.token)).then(async () => {
      await setAuthor(props.author.value);
    });
  };

  const FetchData = ({type}) => {
    if (type === 'Genre') {
      return Genre.map((data) => {
        return (
          <TouchableOpacity
            key={data.id}
            onPress={() => AddData(type, data.id, data.genre)}>
            <ListItem
              containerStyle={styles.list}
              titleStyle={styles.item}
              key={data.id}
              title={data.genre}
              bottomDivider
            />
          </TouchableOpacity>
        );
      });
    }

    if (type === 'Author') {
      return Author.map((data) => {
        return (
          <TouchableOpacity
            key={data.id}
            onPress={() => AddData(type, data.id, data.author)}>
            <ListItem
              containerStyle={styles.list}
              titleStyle={styles.item}
              key={data.id}
              title={data.author}
              bottomDivider
            />
          </TouchableOpacity>
        );
      });
    }

    if (type === 'Book') {
      return Book.map((data) => {
        return (
          <TouchableOpacity
            key={data.id}
            onPress={() => AddData(type, data.id, data.title)}>
            <ListItem
              containerStyle={styles.list}
              titleStyle={styles.item}
              key={data.id}
              leftAvatar={{
                source: {uri: `${APP_API_URL}/images/${data.image}`},
              }}
              subtitle={
                data.description.length > 120
                  ? `${data.description
                      .split(' ')
                      .join(' ')
                      .slice(0, 120)}......`
                  : `${data.description
                      .split(' ')
                      .join(' ')
                      .slice(0, data.description.length)}`
              }
              title={data.title}
              bottomDivider
            />
          </TouchableOpacity>
        );
      });
    }

    return <Text>Not Found</Text>;
  };

  useEffect(() => {
    fetchBook();
    fetchGenre();
    fetchAuthor();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{props.type} Data</Text>
        <Button
          title={` Add ${props.type}`}
          icon={<Icon name="folder-plus" size={24} color="white" />}
          onPress={() => AddData(props.type, null)}
        />

        <FetchData type={props.type} />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
  author: state.author,
  genre: state.genre,
});

export default connect(mapStateToProps)(Data);

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
  list: {backgroundColor: '#eaeaea'},
});
