import React from 'react';
import ContactForm from 'menu9/ContactForm';
import {connect} from 'react-redux';
import * as contactActions from 'actions/contact';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  @media screen and (max-height: 520px) {
    display: none;
  }
`;

const Contact = ({submitForm}) => {
  return(
    <StyledWrapper>
      <ContactForm onSubmit = {submitForm}/>
    </StyledWrapper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: values => dispatch(contactActions.submitForm(values, '/api/v1/email/contact')),
  }
};

export default connect (null, mapDispatchToProps)(Contact);
