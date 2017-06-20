import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
const t = require('tcomb-form-native/lib');

const Form = t.form.Form;

const Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

// form model
const structurePersonal = t.struct({
  name: t.String,
  lastName: t.String,
  email: t.String,
  phone: t.Number,
  age: t.Number,
  gender: Gender,
});

// form model
const structureNotification = t.struct({
  pushNotifications: t.Boolean,
  emailNotifications: t.Boolean,
  smsNotifications: t.Boolean,
  viberNotifications: t.Boolean
});

// form options
const optionsPersonal = {
  // auto: 'placeholders',
  fields: {
    email: {
      keyboardType: 'email-address',
    },
    gender: {
      nullOption: {value: '', text: 'Specify'}
    },
  }
};

// form options
const optionsNotification = {
  fields: {
    pushNotifications: {
      label: 'Push notifications',
      onTintColor: '#b1e35f'
    },
    emailNotifications: {
      label: 'Email',
      onTintColor: '#b1e35f'
    },
    smsNotifications: {
      label: 'SMS',
      onTintColor: '#b1e35f'
    },
    viberNotifications: {
      label: 'Viber',
      onTintColor: '#b1e35f'
    },
  },
}; 

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: 'Andrew',
        lastName: 'Last',
        email: 'first@last.p2h.com',
        phone: '231123123',
        age: '21',
        gender: 'M',
      },
      notificationData: {
        pushNotifications: false,
        emailNotifications: false,
        smsNotifications: false,
        viberNotifications: false
      },

      errors: false,
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeNotification = this.onChangeNotification.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
      <TouchableOpacity
        onPress={
          () => {
            navigation.goBack();
          }
        }
        style={styles.backButton}
      >
        <Icon name="ios-arrow-back" size={25} color="#b1e460" />
        <Text style={styles.back}> Back </Text>
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: 'white', shadowColor: 'transparent' },
      title: 'Settings',
      headerTitleStyle : { paddingHorizontal: 20}
    }
  };

  componentDidMount() {
    // sendng request here (use token from asyncStorage) and setState for form fields

    // getting options from async storage
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          let key = store[i][0];
          let value = store[i][1];
          if (key in this.state.notificationData) {
            this.setState({ notificationData: { ...this.state.notificationData , [key]: (value=='true') }});
          }
        });
      });
    });

  }

  onChange(val){
    this.setState({formData: val});
  }

  onChangeNotification() {
    var value = this.refs.formNotification.getValue();
    if (value) {
      this.setState({ notificationData: value });
    };
    // and change it in asyncstore
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.titleHolder}>
          <Text style={styles.title}> PERSONAL DEATAILS </Text>
        </View>
        <Form
          ref="form"
          type={structurePersonal}
          options={optionsPersonal}
          value={this.state.formData}
          onChange={this.onChange}
        />
        <View style={styles.titleHolder}>
          <Text style={styles.title}> PASSWORD </Text>
        </View>
        <Text> placeholder for PASS here </Text>
        <View style={styles.titleHolder}>
          <Text style={styles.title}> NOTIFICATONS </Text>
        </View>
        <Form
          ref="formNotification"
          type={structureNotification}
          options={optionsNotification}
          value={this.state.notificationData}
          onChange={this.onChangeNotification}
        />
        <View style={styles.titleHolder}>
          <Text style={styles.title}> OTHER </Text>
        </View>
        <Text> placeholder for language here </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleHolder: {
    backgroundColor: '#efeff4',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#bcbdbe',
  },
  title: {
    fontSize: 13,
    color: '#6d6d72',
  },
  back: {
    color: '#b1e460',
    fontSize: 17,
    lineHeight: 25,
    marginLeft: 5,
    marginBottom: 2
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
  }
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Settings);