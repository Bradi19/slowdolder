import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './FormikControl.module.css';
import ErrorText from '../ErrorText';

const TextareaField = ({ label, name, ...rest }) => {
    return (
        <div className={classes.formControl}>
            <label htmlFor={name}>{label}</label>
            <Field
                as="textarea"
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />
        </div>
    );
};

export default TextareaField;