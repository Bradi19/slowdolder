/* eslint-disable import/prefer-default-export,react/prop-types */
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

export const PrivateRoute = ({ component: InnerComponent, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (
            isAuthenticated ?
                (
                  <InnerComponent {...props} />
                ) :
                (
                  <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                  />
                )
        )}
  />
);
