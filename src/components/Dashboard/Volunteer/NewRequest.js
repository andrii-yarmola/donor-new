import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
const t = require('tcomb-form-native/lib');


const Form = t.form.Form;

const donationType = t.enums({
  WholeBlood: 'Whole blood',
  DoubleRedCell: 'Double Red Cell',
  Plasma: 'Plasma',
  Platelets: 'Platelets',
  RedCells: 'Red Cells',
});

const bloodType = t.enums({
  Om: 'O(I) Rh-',
  Op: 'O(I) Rh+',
  Am: 'A(II) Rh-',
  Ap: 'A(II) Rh+',
  Bm: 'B(III) Rh-',
  Bp: 'B(III) Rh+',
  ABm: 'AB(IV) Rh-',
  ABp: 'AB(IV) Rh+',
});

// form model
const structure = t.struct({
  donationType: donationType,
  bloodType: bloodType,
  date: t.Date, // date and time picker
  time: t.Date,
  location: t.String,
  patientInfo: t.String,
  Description: t.String,
  amount: t.Number,
});

// form options
const options = {
  // auto: 'placeholders',
  fields: {
    email: {
      keyboardType: 'email-address',
    },
    donationType: {
      nullOption: {value: '', text: 'Specify'}
    },
    bloodType: {
      nullOption: {value: '', text: 'Specify'}
    },
    date: {
      mode: 'date',
      config: {
        format: (date) => {    
          return moment(date).format("DD MMMM YYYY")
        }
      }
    },
    time: {
      mode: 'time',
      minuteInterval: 15,
      config: {
        format: (date) => {    
          return moment(date).format("hh:mm")
        }
      }
    }
  }
};

class NewRequest extends Component {
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

      errors: false,
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'New',
      headerTintColor: 'white',
      headerLeft: (
      <TouchableOpacity
        onPress={
          () => {
            navigation.goBack();
          }
        }
        style={styles.backButton}
      >
        <Icon name="ios-arrow-back" size={25} color="white" />
        <Text style={styles.back}> Back </Text>
      </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={
            () => {
              // save event
            }
          }
          style={styles.backButton}
        >
        <Text style={styles.back}> Save </Text>
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: '#88c025', shadowColor: 'transparent' },
      headerTitleStyle : { paddingHorizontal: 20}
    }
  };

  componentDidMount() {
    // sendng request here (use token from asyncStorage) and setState for form fields
  }

  onChange(val){
    this.setState({formData: val});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Form
            ref="form"
            type={structure}
            options={options}
            value={this.state.formData}
            onChange={this.onChange}
          />
        </ScrollView>
        <View style={ styles.footer }>
          <TouchableOpacity
            onPress={this.onSubmit}
            style={styles.button}
          >
            <Text style={styles.buttonText}> Send to donors </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  back: {
    color: 'white',
    fontSize: 17,
    lineHeight: 25,
    marginHorizontal: 5,
    marginBottom: 2
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
  },
  button: {
    backgroundColor: '#b1e35f',
    padding: 10,
    borderRadius: 30
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 24,
    lineHeight: 37,
  },
  footer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});

const mapStateToProps = state => ({
  //hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(NewRequest);