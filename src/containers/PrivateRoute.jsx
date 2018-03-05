import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

class PrivateRoute extends React.Component {

    render() {
        const {
            component: Component,
            isAuthenticated,
            ...props
        } = this.props;
        return (
            isAuthenticated ? <Component/> :
                <Redirect from={props.location.pathname} to="/login" />
        )
    }
}

export default connect((state) => {
    return { isAuthenticated: state.userReducer.isAuthenticated };
})(PrivateRoute);