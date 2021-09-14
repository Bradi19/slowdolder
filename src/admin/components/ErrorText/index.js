import React from 'react';
import classes from './ErrorText.module.css';

const ErrorText = (props) => {
    return (
        <div className={classes.error}>
            {props.children}
        </div>
    );
};

export default ErrorText;