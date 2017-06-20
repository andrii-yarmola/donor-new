import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';
import MapView from 'react-native-maps';

import TabSet from './TabSet';
import IncomingList from './IncomingList';
import AcceptedList from './AcceptedList';

class RequestSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestDeatials: {
        // this initial state should be removed, get it from server in 'componentDidMount' by async action
        bloodType: 'Whole Blood',
        postedTime: 'Just now',
        donationDate: '23 December 2018',
        donationTime: '18:30',
        location: "Children's Hospital 16, 2 Lui pastera St. text text text",
        patientInfo: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
        importantInfo: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
        description: 'descr lorem',
        id: 1, // the same as "this.props.navigation.state.params.requestId", so maybe should be removed
      },
    };
  }
  
  componentWillMount() {
     this.props.navigation.setParams({
      titleName: `Request no.${this.props.navigation.state.params.requestId}`
    })
  }

  componentDidMount() {
    // sendng request here with ID, and getting full info from server and setstate
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${ (navigation.state.params.titleName)? navigation.state.params.titleName : 'Request' }`,
      headerTintColor: 'white',
      headerRight: (
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Settings')
            }
          }
          style={styles.backButton}
        >
        <Icon name="md-settings" size={25} color='white' />
      </TouchableOpacity>
      ),
      headerStyle: { backgroundColor: '#88c025', shadowColor: 'transparent' },
      headerTitleStyle : { paddingHorizontal: 20}
    }
  };

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <View style={ [styles.itemHolder, styles.itemHolderRow] }>
            <Text style={ styles.heading }>Date </Text>
            <Text style={ [styles.content, styles.contentFlex] }>
              { this.state.requestDeatials.donationDate }
            </Text>
          </View>
          <View style={ [styles.itemHolder, styles.itemHolderRow] }>
            <Text style={ styles.heading }>Time </Text>
            <Text style={ [styles.content, styles.contentFlex] }>
              { this.state.requestDeatials.donationTime }
            </Text>
          </View>
          <View style={ [styles.itemHolder, styles.itemHolderColumn] }>
            <Text style={ styles.heading }>Location </Text>
            <Text style={ styles.content }>
              { this.state.requestDeatials.location }
            </Text>
          </View>
        </View>

        <ScrollView style={styles.body}>
          <View style={ [styles.itemHolder, styles.itemHolderColumn] }>
            <Text style={ styles.heading }>Patient info </Text>
            <Text style={ [styles.content, styles.contentSmall] }>
              { this.state.requestDeatials.patientInfo }
            </Text>
          </View>
          <View style={ [styles.itemHolder, styles.itemHolderColumn] }>
            <Text style={ styles.heading }>Important </Text>
            <Text style={ [styles.content, styles.contentSmall] }>
              { this.state.requestDeatials.importantInfo }
            </Text>
          </View>
          <View style={ [styles.itemHolder, styles.itemHolderColumn] }>
            <Text style={ styles.heading }>Description </Text>
            <Text style={ [styles.content, styles.contentSmall] }>
              { this.state.requestDeatials.description }
            </Text>
          </View>
          <View style={ styles.mapHolder }>
            <MapView
              style={styles.map}
              // recive it from server and save this object to state
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
        </ScrollView>

        <View style={ styles.footer }>
          <TouchableOpacity 
            // we should recive from server isAccepted(bool) and change button type: 'accept' or 'cancel'
            style={ styles.button }>
            <Text style={ styles.buttonText }> Accept </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  map: {
    height: 250,
  },
  header: {
  },
  itemHolder: {
    borderBottomWidth: 0.5,
    borderColor: '#bcbdbe',
    marginLeft: 15,
    paddingVertical: 7,
  },
  itemHolderRow: {
    flexDirection: 'row'
  },
  itemHolderColumn: {
    flexDirection: 'column'
  },
  contentFlex: {
    flex: 1
  },
  heading: {
    width: 100,
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 5 
  },
  content: {
    fontSize: 17,
    marginVertical: 5
  },
  contentSmall: {
    fontSize: 13,
    color: '#8e8e93'
  },
  body: {

  },
  footer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 0.5,
    borderColor: '#bcbdbe',
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
  container: {
    flex: 1,
    //justifyContent: 'center',
    backgroundColor: 'white'
  },
  backButton: {
    marginHorizontal: 15 
  }
});


export default RequestSingle;