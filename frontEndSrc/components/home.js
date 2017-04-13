
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import * as UserActions from '../actions/user';
import Navigation from './navigation';

export default class Home extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired
    }

    constructor (props, context) {
        super(props, context);
        this.login = this.login.bind(this);
    }

    login (e) {
        e.preventDefault();
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
