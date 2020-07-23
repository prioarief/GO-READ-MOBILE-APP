import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import {dilan} from '../../assets';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.border}>
            <Avatar
              showAccessory={true}
              rounded
              source={dilan}
              size={120}
              showEditButton={true}
            />
          </View>
          <Text style={styles.name}>{this.props.auth.data.name}</Text>
        </View>
        <View style={styles.content}>
          <TouchableOpacity>
            <ListItem
              titleStyle={styles.item}
              key={3}
              leftIcon={<Icon name="user-cog" size={20} color="black" />}
              title="Edit Profile"
              bottomDivider
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('History');
            }}>
            <ListItem
              titleStyle={styles.item}
              key={1}
              leftIcon={<Icon name="history" size={20} color="black" />}
              title=" History"
              bottomDivider
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('Login');
            }}>
            <ListItem
              titleStyle={styles.item}
              key={2}
              leftIcon={<Icon name="sign-out-alt" size={20} color="black" />}
              title=" Logout"
              bottomDivider
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book,
  auth: state.auth,
});

export default connect(mapStateToProps)(UserProfile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5d7dae0',
    flexDirection: 'column',
  },
  profile: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    paddingLeft: 10,
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'white',
  },
  border: {
    borderWidth: 2,
    borderColor: 'black',
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    borderRadius: 130 / 2,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
  },
  name: {
    paddingVertical: 15,
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 250,
    textAlign: 'center',
  },
  item: {paddingLeft: 10},
});
