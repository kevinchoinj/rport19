import React from 'react';
import {Formik, Form, Field} from 'formik';
import styled from 'styled-components';
import ContactFormSending from 'menu9/ContactFormSending';

const StyledWrapper = styled.div`
    label {
      font-size: var(--size-smallest);
      margin-bottom: .5rem;
    }
    input, textarea {
      font-family: 'Open Sans', Helvetica, sans-serif;
      background-color: transparent;
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: 1px solid ${props => props.theme.topRightText};
      border-bottom: 1px solid ${props => props.theme.topRightText};
      padding: .5rem;
      font-size: var(--size-smallest);
      box-sizing: border-box;
      color: ${props => props.theme.colorText};
      margin-bottom: 1rem;
      resize: none;
      &:focus {
        outline: none;
      }
      &:-internal-autofill-selected {
        background-color: transparent;
        color: ${props => props.theme.colorText};
      }
    }
    button {
      background-color: transparent;
      color: ${props => props.theme.colorText};
      padding: 1rem;
      font-size: var(--size-smallest);
      border-top: none;
      border-right: none;
      border-left: 1px solid ${props => props.theme.topRightText};
      border-bottom: 1px solid ${props => props.theme.topRightText};
      cursor: pointer;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: #222;
        transition: ${props => props.theme.transitionMedium};
      }
    }
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
;`

const ContactForm = ({onSubmit}) => {
  return (
    <StyledWrapper>
      <Formik
        enableReinitialize
        initialValues={{

          message: "",
        }}
        onSubmit={(values, { setSubmitting }) => onSubmit(values)}
      >
        {(values, isSubmitting) =>
          <Form>
            <label htmlFor="email">
              Email
              <Field name="email"/>
            </label>

            <label htmlFor="email">
              Message
              <Field
                name="message"
                as="textarea"
                rows="8"
              />
            </label>
            <StyledButtonWrapper>
              <button type="submit">
                Contact
              </button>
              <ContactFormSending/>
            </StyledButtonWrapper>
        </Form>
        }
      </Formik>
    </StyledWrapper>
  );
}

export default ContactForm;