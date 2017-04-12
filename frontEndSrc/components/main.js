
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Button, Checkbox, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import * as UserActions from '../actions/user';

export default class Home extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        userActions: PropTypes.object.isRequired
    }

    constructor (props, context) {
        super(props, context);
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
                            <div className="navbar-right">
                                <ul className="nav navbar-nav">
                                    <li><a href="#" onClick={this.props.userActions.logout}>Log out</a></li>
                                </ul>
                            </div>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
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



