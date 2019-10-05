import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styled from 'styled-components';
import ContactFormSending from 'menu9/ContactFormSending';

const RenderField = ({
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <input {...input}
      type={type}
      className="form__input"
      placeholder={placeholder}
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </div>
);

const RenderTextarea = ({
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <textarea {...input}
      rows= {6}
      type={type}
      className="form__input"
      placeholder={placeholder}
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </div>
);

const StyledWrapper = styled.div`
    input, textarea {
      font-family: 'Open Sans', Helvetica, sans-serif;
      background-color: transparent;
      width: 100%;
      border-top: none;
      border-right: none;
      border-left: 1px solid ${props => props.theme.topRightText};
      border-bottom: 1px solid ${props => props.theme.topRightText};
      padding: 1rem;
      font-size: 16px;
      box-sizing: border-box;
      color: ${props => props.theme.colorText};
      margin-bottom: 2rem;
      resize: none;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: transparent;
      color: ${props => props.theme.colorText};
      padding: 1rem;
      font-size: 16px;
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

class ContactForm extends React.Component {
  render() {
    const { handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <StyledWrapper>
          <Field
            name="email"
            component={RenderField}
            type="text"
            placeholder="Email Address"
          />
          <Field
            name="message"
            component={RenderTextarea}
            type="text"
            placeholder="Message"
          />
          <StyledButtonWrapper>
            <button type="submit">
              Contact
            </button>
            <ContactFormSending/>
          </StyledButtonWrapper>
        </StyledWrapper>
      </form>
    );
  }
}

function mapStateToProps(){
  return{
    initialValues: {
    },
  };
}
function mapDispatchToProps(){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'contact',
    enableReinitialize: true,
  })(ContactForm)
);
