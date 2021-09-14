import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './FormikControl.module.css';
import ErrorText from '../ErrorText';

const InputField = ({ label, name, ...rest }) => {
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    );
};

export default InputField;