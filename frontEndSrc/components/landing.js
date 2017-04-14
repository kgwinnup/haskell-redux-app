
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Checkbox } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import * as UserActions from '../actions/user';
import * as RouteActions from '../actions/route';
import Navigation from './navigation';

class Landing extends Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
          <div>
            <Navigation user={this.props.user}
                        userActions={this.props.userActions} 
                        routeActions={this.props.routeActions} />
             
            <div className="ui text container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              <h2>Super awesome haskell/reactjs/redux template with authentication</h2>
            </div>
          </div>
        );
    }
};

Landing.propTypes = {
  user: PropTypes.object.isRequired,
  userActions: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
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
)(Landing);



