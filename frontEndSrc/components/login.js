
import React, { Component, PropTypes } from 'react';
import { Button, Checkbox, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from 'react-dom';

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
        e.preventDefault();
        this.props.onSubmit(this.username.value, this.password.value, this.remember.checked);
    }

    render () {
        return (
            <div className='container'>
                <FormGroup controlId='loginForm' bsClass='form-signin'>
                    <h2 className="form-signin-heading">Please sign in</h2>
                    <ControlLabel>Email Address</ControlLabel>
                    <FormControl type="text"
                                 inputRef={(ref) => { this.username = ref; }}
                                 placeholder="Email address" />
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password"
                                 inputRef={(ref) => { this.password = ref; }}
                                 placeholder="Email address" />
                    <Checkbox inputRef={(ref) => { this.remember = ref; }}>
                        Remember me
                    </Checkbox>
                    <Button bsClass="btn btn-lg btn-primary btn-block" 
                            type="button" 
                            onClick={this.login}>Sign in</Button>
                </FormGroup>
            </div>
        );
    }
};
