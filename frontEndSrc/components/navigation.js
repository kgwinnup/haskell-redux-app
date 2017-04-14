
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

export default class Navigation extends Component {
    
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout (e) {
        e.preventDefault();
        this.props.userActions.logout();
        this.props.routeActions.setPath("/");
    }

    render () {
        
        let buttons = null;
        if (this.props.user.userId == null) {
            buttons = (<Button.Group size="tiny">
                         <Button onClick={() => this.props.routeActions.setPath("/login")}>Log In</Button>
                         <Button.Or />
                         <Button>Sign Up</Button>
                       </Button.Group>);
        } else {
            buttons = (<Button.Group size="tiny">
                         <Button onClick={this.logout}>Sign Out</Button>
                       </Button.Group>);

        }

        let loggedin = (<div></div>);
        if (this.props.user.userId != null) {
            loggedin = (
                <div className="ui simple dropdown item">
                  Secure Pages<i className="dropdown icon"></i>
                  <div className="menu">
                    <a className="item" href="/secure">Secure 1</a>
                    <a className="item" href="/secure">Secure 2</a>
                  </div>
                </div>);
        }

        return (
          <div>

            <div className="ui fixed menu">
              <div className="ui container">
                <a href="#" className="header item">Auth Template</a>
                    {loggedin}
                <div className="right item">
                    {buttons}
                </div>
              </div>
            </div>

          </div>
        );
    }
};

Navigation.propTypes = {
    user: PropTypes.object.isRequired,
    userActions: PropTypes.object.isRequired,
    routeActions: PropTypes.object.isRequired
}
