import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import {loginPassport} from 'actions/authentication';
import AdminButton from 'admin/components/AdminButton';
import {Label} from 'admin/components/general';

const LoginForm = ({login}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={values => {
        login(values);
      }}
    >
      {() =>
        <Form>
          <Label label="Username"/>
          <Field name="username"/>
          <Label label="Password"/>
          <Field name="password" type="password"/>
          <AdminButton type="submit">Submit</AdminButton>
        </Form>
      }
    </Formik>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(loginPassport(values)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
