
import React, { Component, PropTypes } from 'react';
import { Button, Checkbox } from 'semantic-ui-react';

import { GET_COOKIE } from '../middleware/http';

export default class Login extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    constructor (props, context) {
        super(props, context);
        this.login = this.login.bind(this);
    }

    login (e) {
        this.props.onSubmit(this.username.value, this.password.value, this.remember.checked);
    }

    render () {
        return (
          <div class="ui middle aligned center aligned grid">
            <div class="column">

              <h2 class="ui teal image header">
                <img src="assets/images/logo.png" class="image" />
                <div class="content">
                  Log-in to your account
                </div>
              </h2>

              <Form>
                <Form.Input onChange={e => console.log(e.target.value)} label='Username' type='username' />
                <Form.Input onChange={e => console.log(e.target.value)} label='Password' type='Password' />
                <Form.Button onClick={this.login}>Login</Form.Button>
              </Form>

              <div class="ui message">
                New to us? <a href="#">Sign Up</a>
              </div>
            </div>
          </div>

        );
    }
};
