import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styled from 'styled-components';

const RenderField = ({
  className,
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <>
    <input {...input}
      placeholder={placeholder}
      type={type}
      className={className}
    />
    {touched &&
      ((error && <span>{error}</span>) ||
        (warning && <span>{warning}</span>))}
  </>
);
const StyledField = styled(RenderField)`
  padding: 14px 8px;
  box-sizing: border-box;
  outline: none;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,.7);
  min-width: 255px;
  border-radius: 3px;
  color: var(--color-white);
  font-family: 'Open Sans', Helvetica, sans-serif;
  &::placeholder {
    color: var(--color-white);
  }
`;
const Button = ({className, children}) => (
  <button
    type="submit"
    className={className}
  >
    {children}
  </button>
);
const StyledButton = styled(Button)`
  width: 100%;
  background-color: var(--color-primary);
  color: var(--black-color);
  padding: 14px 8px;
  border: none;
  cursor: pointer;
  transition: var(--transition-medium);
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 700;
  color: var(--color-grey-light);
  &:hover {
    background-color: var(--color-primary-dark);
  }
`;

let TextBasicForm = ({handleSubmit, error, textInputs}) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {textInputs && textInputs.map((value) => {
        return (
          <div key={value.name}>
            <Field
              name={value.name}
              component={StyledField}
              type={value.type}
              placeholder={value.name}
            />
          </div>
        );
      })
      }
      {error && <div>{error}</div>}
      <div>
        <StyledButton>
          Submit
        </StyledButton>
      </div>
    </form>
  );
};

function mapStateToProps(state, prop){
  return{
    form: prop.formName,
  };
}

TextBasicForm = reduxForm({
  enableReinitialize: true,
  onSubmitSuccess: (result, dispatch, props) => {
    props.reset(props.formName);
  }
})(TextBasicForm);

export default connect(mapStateToProps)(TextBasicForm);
