import React from 'react';
import { Formik, Form, Field } from 'formik';
import { InputElem } from '../FormControls';


const BlogForm = ({ controls, closeIcon }) => {

    const initialValues = {
        formName: '',
    };

    const onSubmit = (values, onSubmitProps) => {
        setTimeout(() => {
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
        }, 2000);
    };

    return (
        <div className="form_container">
            <div className="loginBox">
                <div className="modal__header">
                    {closeIcon}
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validateOnChange={false}
                    validateOnBlur={true}
                >
                    {() => (
                        <Form autoComplete="off">

                            <div className="formControl">
                                <label htmlFor="formName" >Name</label>
                                <Field name="formName" placeholder="Enter name">
                                    {InputElem}
                                </Field>
                            </div>

{/*                             <button disabled={formik.isSubmitting}><span>Register</span></button> */}
                            <div className="modal__controls">
                                {controls}
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    );
};

export default BlogForm;