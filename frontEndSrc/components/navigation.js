
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

export default class Navigation extends Component {
    render () {
        return (
          <div>

            <div className="ui fixed menu">
              <div className="ui container">
                <a href="#" className="header item">Auth Template</a>
                <a href="#" className="item">Home</a>
                <div className="ui simple dropdown item">
                  Secure Pages<i className="dropdown icon"></i>
                  <div className="menu">
                    <a className="item" href="/secure">Secure 1</a>
                    <a className="item" href="/secure">Secure 2</a>
                  </div>
                </div>
                <div className="right item">
                  <Button.Group size="tiny">
                    <Button>Log In</Button>
                    <Button.Or />
                    <Button>Sign Up</Button>
                  </Button.Group>
                </div>
              </div>
            </div>

          </div>
        );
    }
};

Navigation.propTypes = {
  addr: PropTypes.object.isRequired
}
