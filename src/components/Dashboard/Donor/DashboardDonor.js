import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';

import TabSet from './../TabSet';
import IncomingList from './IncomingList';
import AcceptedList from './AcceptedList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabObj: {
        tabActive: 'Incoming',
        tabArr: ['Incoming', 'Accepted'],
      },
      incomingData: [
        // this initial state should be removed, get it from server in 'componentDidMount' by async action
        {
          bloodType: 'Whole Blood',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          description: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
          id: 1,
        },
        {
          bloodType: 'Whole Blood 2',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          id: 2
        }
      ],
      acceptedData: [
        {
          bloodType: 'Apheresis',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          description: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
          id: 3,
        },
        {
          bloodType: 'Apheresis',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          description: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
          id: 4,
        },
      ],
    };
    this.onTabChange = this.onTabChange.bind(this);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      titleName: `${this.state.tabObj.tabActive} requests`
    })
  }

  componentDidMount() {
    // sendng request here and setstate for 2 data lists
  }

  onTabChange(tabName) {
    this.setState({ tabObj : { ...this.state.tabObj, tabActive: tabName } });
    this.props.navigation.setParams({
      titleName: `${tabName} requests`
    })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${ (navigation.state.params)? navigation.state.params.titleName : '' }`,
      headerTintColor: 'white',
      headerLeft: null,
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
    }
  };

  render() {
    return (
      <View style={ styles.container }>
        { (this.state.tabObj.tabActive === 'Incoming') ? 
          <IncomingList 
            incomingData = { this.state.incomingData}
            navigate = { this.props.navigation.navigate }
          /> 
          : 
          <AcceptedList 
            incomingData = { this.state.acceptedData}
            navigate = { this.props.navigation.navigate }
          />
        }
        <TabSet 
          tabActive = { this.state.tabObj.tabActive }
          tabArr = { this.state.tabObj.tabArr }
          counts = { [this.state.incomingData.length, this.state.acceptedData.length] }
          onTabChange = { this.onTabChange }
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  backButton: {
    marginHorizontal: 15 
  }
});

const mapStateToProps = state => ({
  // hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);