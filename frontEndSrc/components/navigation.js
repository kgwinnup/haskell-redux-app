
import React, { Component, PropTypes } from 'react';

export default class Navigation extends Component {

    static propTypes = {
    }

    constructor (props, context) {
        super(props, context);
    }

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
              </div>
            </div>

          </div>
        );
    }
};
