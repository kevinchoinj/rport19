import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import _ from 'lodash';
import styled from 'styled-components';

const required = value => (value ? undefined : '*Required');

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
  color: #fff;
  font-family: 'Open Sans', Helvetica, sans-serif;
  &::placeholder {
    color: #fff;
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
  background-color: ${props => props.theme.colorAdminPrimary};
  color: ${props => props.theme.colorBackground};
  padding: 14px 8px;
  border: none;
  cursor: pointer;
  transition: ${props => props.theme.transitionMedium};
  font-family: 'Open Sans', Helvetica, sans-serif;
  font-weight: 700;
  color: ${props => props.theme.colorText};
  &:hover {
    background-color: ${props => props.theme.colorAdminPrimaryDark};
  }
`;
let MiscProjectsEditForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Field
          name="name"
          component={StyledField}
          type="text"
          validate={[required]}
          placeholder="Title"
        />
      </div>
      <div>
        <Field
          name="link"
          component={StyledField}
          type="text"
          validate={[required]}
          placeholder="link"
        />
      </div>
      {error && <div>{error}</div>}
      <StyledButton>
        Submit
      </StyledButton>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  const projectData = _.find(state.images.miscProjects, {'id': props.id});
  const projectDoc = projectData ? projectData.doc : null;
  return{
    testValue: projectData,
    initialValues: {
      id: projectDoc ? projectDoc._id : null,
      rev: projectDoc ? projectDoc._rev : null,

      name: projectDoc ? projectDoc.name : null,
      link: projectDoc ? projectDoc.link : null,

      createdAt: projectDoc ? projectDoc.created_at : null,
      url: projectDoc ? projectDoc.url : null,
      awsKey: projectDoc ? projectDoc.awsKey : null,
    },
  };
};

MiscProjectsEditForm = reduxForm({
  form: 'miscProjectsEdit',
  enableReinitialize: true,
})(MiscProjectsEditForm);

export default connect(mapStateToProps, null)(MiscProjectsEditForm);
