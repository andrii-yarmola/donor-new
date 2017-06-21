import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import * as actionCreators from './../../../actions/actionCreators';
import { bindActionCreators } from 'redux';

import TabSet from './../TabSet';
import IncomingList from './IncomingList';
import SentList from './SentList';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabObj: {
        tabActive: 'Sent',
        tabArr: ['Drafts', 'Sent'],
      },
      draftsData: [
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
      sentData: [
        {
          bloodType: 'Apheresis',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          description: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
          id: 3,
          status: 'Sent',
          amountTotal: 17,
          amountNow: 12
        },
        {
          bloodType: 'Apheresis',
          postedTime: 'Just now',
          donationDate: '23 December 2018',
          donationTime: '18:30',
          location: "Children's Hospital 16, 2 Lui pastera St.",
          description: 'lorem ipsume lorem ipsumelorem ipsume lorem ipsume lorem ipsume ',
          id: 4,
          status: 'Done',
          amountTotal: 17,
          amountNow: 12
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
      headerLeft: 
        <TouchableOpacity
          onPress={
            () => {
              navigation.navigate('Settings')
            }
          }
          style={styles.newButton}
        >
        <Icon name="md-chatboxes" size={21} color='white' />
        <Text style={styles.newButtonText} > New </Text>
      </TouchableOpacity>
      ,
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
        { (this.state.tabObj.tabActive === 'Drafts') ? 
          <IncomingList 
            incomingData = { this.state.draftsData}
            navigate = { this.props.navigation.navigate }
          /> 
          : 
          <SentList 
            incomingData = { this.state.sentData}
            navigate = { this.props.navigation.navigate }
          />
        }
        <TabSet 
          tabActive = { this.state.tabObj.tabActive }
          tabArr = { this.state.tabObj.tabArr }
          counts = { [this.state.draftsData.length, this.state.sentData.length] }
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
  },
  newButton: {
    flexDirection: 'row',
    marginHorizontal: 15
  },
  newButtonText: {
    color: 'white',
    fontSize: 17,
    marginHorizontal: 5
  }
});

const mapStateToProps = state => ({
  // hotList: state.reddit.hotList
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Dashboard);