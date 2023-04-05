import React from "react";
// Models
import { User } from "../../../models/user.class";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ROLES } from "../../../models/roles.enum";



const Registerformik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', //To confirm password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when('password', {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref('password')],
                        'Passwords must match!'
                    )
                })
                .required('You must confirm the password')
        }
    )

    const submit = (values) => {
        console.log('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                // Yup Validation Schema
                validationSchema={registerSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000))
                    alert(JSON.stringify(values, null, 2))
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor='username'>Username</label>
                        <Field id='username' type='text' name='username' placeholder='Your username' />
                        {/* Username Erros */}
                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor='email'>Email</label>
                        <Field id='email' type='email' name='email' placeholder='example@email.com' />
                        {/* Email Erros */}
                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name="email" component='div'></ErrorMessage>
                            )
                        }
                        <label htmlFor='confirm'>Password</label>
                        <Field
                            id='confirm'
                            name='confirm'
                            placeholder='confirm'
                            type='confirm'
                        />
                        {/* Confirm Errors  */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }
                        <button type='submit'>Register Account</button>
                        {isSubmitting ? (<p>Login you credentials...</p>) : null}



                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
export default Registerformik