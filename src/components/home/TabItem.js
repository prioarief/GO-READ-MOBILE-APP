import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const IconScreen = () => {
    if (title === 'User') {
      return active ? (
        <Icon name="users" size={32} color="navy" />
      ) : (
        <Icon name="users" size={32} color="black" />
      );
    }
    if (title === 'History') {
      return active ? (
        <Icon name="history" size={32} color="navy" />
      ) : (
        <Icon name="history" size={32} color="black" />
      );
    }
    if (title === 'Admin') {
      return active ? (
        <Icon name="user-secret" size={32} color="navy" />
      ) : (
        <Icon name="user-secret" size={32} color="black" />
      );
    }
    if (title === 'Dashboard') {
      return active ? (
        <Icon name="dashboard" size={32} color="navy" />
      ) : (
        <Icon name="dashboard" size={32} color="black" />
      );
    }

    return <Icon name="home" size={32} color="black" />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <IconScreen />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: (active) => ({
    color: active ? 'navy' : 'black',
    fontWeight: 'bold',
  }),
});
