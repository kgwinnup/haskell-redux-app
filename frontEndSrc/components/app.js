
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as UserActions from '../actions/user';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import Navigation from './navigation';
import { GET_COOKIE } from '../middleware/http';

class App extends Component {
    render () {
        // get userId from state or from cookie
        const { userId } = this.props.user;
        const { login } = this.props.userActions;

        return(
          <div>
            <Navigation addr={this.props.addr} />
          </div>
        );
    }
};

App.propTypes = {
  user: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
}

function mapStateToProps (state) {
    return {
        user: state.user,
        router: state.router
    };
};

function mapDispatchToProps (dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
