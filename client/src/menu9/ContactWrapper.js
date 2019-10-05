import React from 'react';
import ContactForm from 'menu9/ContactForm';
import {connect} from 'react-redux';
import * as contactActions from 'actions/contact';

const Contact = ({submitForm}) => {
  return(
    <div>
      <ContactForm onSubmit = {submitForm}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: values => dispatch(contactActions.submitForm(values, '/api/v1/email/contact')),
  }
};

export default connect (null, mapDispatchToProps)(Contact);
