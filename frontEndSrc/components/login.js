
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions/user';
import * as RouteActions from '../actions/route';
import { Form } from 'semantic-ui-react';

import { GET_COOKIE } from '../middleware/http';

class Login extends Component {

    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
        this.updateState = this.updateState.bind(this);
        this.negateState = this.negateState.bind(this);

        this.state = {
            username: "",
            password: "",
            remember: false
        }
    }

    componentDidUpdate(props, state) {
        if (this.props.user.userId != null ) {
            this.props.routeActions.setPath("/home");
        }
    }

    login (e) {
        e.preventDefault();
        this.props.userActions.login(this.state.username, this.state.password, this.state.remember);
    }

    updateState (key, val) {
        this.state[key] = val;
        this.setState(this.state);
    }

    negateState (key) {
        this.state[key] = !this.state.key;
        this.setState(this.state);
    }

    render () {
      
        return (
          <div className="ui middle aligned center aligned grid">
            <div className="column">

              <h2 className="ui teal image header">
                <div className="content">
                  Log-in to your account
                </div>
              </h2>

              <Form>
                <Form.Input onChange={e => this.updateState("username", e.target.value)} label='Username' type='username' />
                <Form.Input onChange={e => this.updateState("password", e.target.value)} label='Password' type='Password' />
                <Form.Field onChange={e => this.updateState("remember", e.target.checked)}>
                    <Checkbox label="Remember me" onChange={e => this.negateState("remember")} />
                </Form.Field>
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
        routeActions: bindActionCreators(RouteActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
