import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';

import Welcome from './components/Welcome/Welcome';
import TermsAndConditions from './components/TermsAndConditions';
import Settings from './components/Settings';
import RegistrationWrap from './components/Registration/RegistrationWrap';
import DashboardDonor from './components/Dashboard/Donor/DashboardDonor';
import DashboardVolunteer from './components/Dashboard/Volunteer/DashboardVolunteer';
import RegistrationDone from './components/Registration/RegistrationDone';
import RequestSingle from './components/Dashboard/Donor/RequestSingle';
import NewRequest from './components/Dashboard/Volunteer/NewRequest';

import * as actionCreators from './actions/actionCreators';

// global form styling for t-comb-forms
import { forms } from './styles';

// global variable for request debugging
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    TermsAndConditions: { screen: TermsAndConditions },
    RegistrationWrap: { screen: RegistrationWrap },
    RegistrationDone: { screen: RegistrationDone },
    Settings: { screen: Settings },
    
    DashboardDonor: { screen: DashboardDonor },
    RequestSingle: { screen: RequestSingle },

    DashboardVolunteer: { screen: DashboardVolunteer },
    NewRequest: { screen: NewRequest },
    // req single for  volun
  }, 
  { 
    headerMode: 'screen',
    initialRouteName: 'DashboardVolunteer'
  }
);

const Navigator = ({ dispatch, nav }) => (
  <AppNavigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);

export const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default connect( state => ({ nav: state.nav }))(Navigator);
