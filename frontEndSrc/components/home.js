
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Button, Checkbox, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import * as UserActions from '../actions/user';

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
                <nav className="navbar navbar-fixed-top">
                    <div className="container">

                        <div className="navbar-header">
                            <button type="button" 
                                    className="navbar-toggle collapsed" 
                                    data-toggle="collapse" 
                                    data-target="#navbar" 
                                    aria-expanded="false" 
                                    aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Template</a>
                        </div>

                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>

                            <FormGroup controlId='loginForm' bsClass='navbar-form navbar-right'>
                                <FormControl type="text"
                                             inputRef={(ref) => { this.username = ref; }}
                                             placeholder="Email address" />
                                <FormControl type="password"
                                             inputRef={(ref) => { this.password = ref; }}
                                             placeholder="Email address" />
                                <Button bsClass="btn" 
                                        type="submit" 
                                        onClick={this.login}>Sign in</Button>
                            </FormGroup>


                        </div>
                    </div>
                </nav>

                <div className="container">
                    <div className="content">
                        <h1>Bootstrap starter template</h1>
                        <p className="lead">welcome</p>
                    </div>
                </div>
            </div>
        );
    }
};



