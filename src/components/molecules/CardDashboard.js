import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {dilan} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CardDashboard = ({onPress, title, total, icon, background, color}) => {
  return (
    <TouchableOpacity style={styles.container(background)} onPress={onPress}>
      <View style={styles.content}>
        <Icon name={icon} size={24} color={color} />
        <Text style={styles.title(color)}>{title}</Text>
        <Text style={styles.title(color)}>({total})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardDashboard;

const styles = StyleSheet.create({
  container: (background) => ({
    flex: 1,
    paddingLeft: 25,
    paddingVertical: 10,
    flexDirection: 'row',
    backgroundColor: background,
    borderRadius: 16,
    marginRight: 20,
  }),
  content: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 160,
    paddingBottom: 100,
    borderRadius: 15,
  },
  title: (color) => ({
    color: color,
    paddingHorizontal: 20,
    fontSize: 20,
    maxWidth: 200,
    fontFamily: 'Rubik-Medium',
  }),
  description: {
    fontFamily: 'Rubik-Reguler',
    paddingHorizontal: 20,
    paddingTop: 5,
    fontSize: 14,
    maxWidth: 230,
  },
});
