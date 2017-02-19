
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import * as UserActions from '../actions/user';
import { bindActionCreators } from 'redux';
import { Button, Checkbox, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Main from './main';
import Home from './home';
import { GET_COOKIE } from '../middleware/http';

class App extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        userActions: PropTypes.object.isRequired
    }

    render () {
        // get userId from state or from cookie
        const { userId } = this.props.user;
        const { login } = this.props.userActions;

        var page;
        if (userId != null) {
            page = <Main user={this.props.user}
                         userActions={this.props.userActions} />
        } else {
            page = <Home login={this.props.userActions.login} />
        }

        return (page);
    }
};

function mapStateToProps (state) {
    return {
        user: state.user
    };
};

function mapDispatchToProps (dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


