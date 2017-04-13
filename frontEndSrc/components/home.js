
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import * as UserActions from '../actions/user';
import Navigation from './navigation';

export default class Home extends Component {

    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login (e) {
        this.props.login(this.username.value, this.password.value, false);
    }

    render () {
        return (
          <div>
            <Navigation />
          </div>
        );
    }
};

Home.propTypes = {
  login: PropTypes.func.isRequired
}
