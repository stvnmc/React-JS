import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

export const LoginFormik = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invaled eamil format')
                .required('Email is required'),
            password: Yup.string()
                .required('Password is required')
        }
    )

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // Initial values that the form will take
                initialValues={initialCredentials}
                // Yup Validation Schema
                validationSchema={loginSchema}
                //onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    alert(JSON.stringify(values, null, 2));
                    //we save the data in the localstorage
                    localStorage.setItem('credentials', values)
                }}
            >
                {/* We obtain props from Formik */}
                {({
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => {
                    return (
                        <Form >
                            <label htmlFor="email">Email</label>
                            <Field id="eamil" type="email" name="email" placeholder="example@email.com" />
                            {/* Email Errors */}
                            {errors.email && touched.email &&
                                (
                                    <div>
                                        <ErrorMessage name="email" component='div'></ErrorMessage>
                                    </div>
                                )
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="password" />
                            {/* Password Errors */}
                            {errors.password && touched.password && (
                                <div>
                                    <ErrorMessage name="password"></ErrorMessage>
                                </div>
                            )}
                            <button type="submit">Login</button>
                            {isSubmitting ? (<p>Login your credentials..</p>) : null}
                        </Form>
                    )
                }
                }
            </Formik>
        </div>
    )
}
