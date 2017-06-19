import React from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authenticate extends React.Component {
    componentWillMount() {
      if (this.props.isAuth) {
        this.context.router.push('/server/dashboard');
      }
    }
    
    componentWillUpdate(nextProps) {
      if (!nextProps.isAuth) {
        this.context.router.push('/server/dashboard');
      }
    }
    
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
  
  function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuth
    }
  }
  
  return connect(mapStateToProps)(Authenticate);
}

