
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user';
import { Form } from 'semantic-ui-react';

import { GET_COOKIE } from '../middleware/http';

class Login extends Component {

    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login (e) {
        this.props.userActions.onSubmit(this.username.value, this.password.value, this.remember.checked);
    }

    render () {
      
      const styles = {"max-width": "450px"};

        return (
          <div className="ui middle aligned center aligned grid" style={styles} >
            <div className="column">

              <h2 className="ui teal image header">
                <div className="content">
                  Log-in to your account
                </div>
              </h2>

              <Form>
                <Form.Input onChange={e => console.log(e.target.value)} label='Username' type='username' />
                <Form.Input onChange={e => console.log(e.target.value)} label='Password' type='Password' />
                <Form.Button onClick={this.login}>Login</Form.Button>
              </Form>

              <div className="ui message">
                New to us? <a href="#">Sign Up</a>
              </div>
            </div>
          </div>

        );
    }
};

Login.propTypes = {
  userActions: PropTypes.object.isRequired
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
)(Login);
