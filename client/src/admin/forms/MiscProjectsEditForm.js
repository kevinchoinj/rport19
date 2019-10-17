import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {find, propEq} from 'ramda';
import AdminButton from 'admin/components/AdminButton';

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
      <AdminButton>
        Submit
      </AdminButton>
    </form>
  );
};

const mapStateToProps = (state, props) => {
  const projectData = find(propEq('id', props.id), state.images.miscProjects);
  const projectDoc = projectData && projectData.doc;
  return{
    testValue: projectData,
    initialValues: {
      id: projectDoc && projectDoc._id,
      rev: projectDoc && projectDoc._rev,

      name: projectDoc && projectDoc.name,
      link: projectDoc && projectDoc.link,

      createdAt: projectDoc && projectDoc.created_at,
      url: projectDoc && projectDoc.url,
      awsKey: projectDoc && projectDoc.awsKey,
    },
  };
};

MiscProjectsEditForm = reduxForm({
  form: 'miscProjectsEdit',
  enableReinitialize: true,
})(MiscProjectsEditForm);

export default connect(mapStateToProps, null)(MiscProjectsEditForm);
