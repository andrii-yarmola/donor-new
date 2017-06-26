import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const t = require('tcomb-form-native');

const Form = t.form.Form;

const BloodType = t.enums({
  Om: 'O(I) Rh-',
  Op: 'O(I) Rh+',
  Am: 'A(II) Rh-',
  Ap: 'A(II) Rh+',
  Bm: 'B(III) Rh-',
  Bp: 'B(III) Rh+',
  ABm: 'AB(IV) Rh-',
  ABp: 'AB(IV) Rh+',
  IDK: "I don't know my blood type"
});

// form model
const structure = t.struct({
  bloodType: BloodType,
  isAlreadyDonor: t.Boolean,
  //isAlreadyDonor: t.Date,
});

// form options
const options = {
  fields: {
    bloodType: {
      label: "My blood type",
      nullOption: {value: '', text: 'Specify'}
    },
    isAlreadyDonor: {
      label: "I donated in last 3 weeks",
      onTintColor: '#b1e35f'
    },
  }
}; 

export default class RegistrationStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e){
    var value = this.refs.form.getValue();
    if (value) {
      // validation
      this.props.saveValues(value);
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Specify your blood type</Text>
          <Form
            ref="form"
            type={structure}
            options={options}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </View>
        <TouchableOpacity
          onPress={this.onSubmit}
          style={styles.submit}
        >
          <Text style={styles.submitText}> Continue </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: 15
  },
  content: {

  },
  heading: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: '100',
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 25,
  },
  submit: {
    alignSelf: 'center',
    marginVertical: 25
  },
  submitText: {
    fontSize: 24,
    color: '#b1e35f',
  }
});

