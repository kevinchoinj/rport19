import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import _ from 'lodash';

const required = value => (value ? undefined : '*Required');

const RenderField = ({
  input,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <React.Fragment>
    <input {...input}
      placeholder={placeholder}
      type={type}
      className="admin_form__field"
    />
    {touched &&
      ((error && <span className="form_error">{error}</span>) ||
        (warning && <span className="form_error">{warning}</span>))}
  </React.Fragment>
);

let MiscProjectsEditForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="admin_form">
      <div className="spacing_bottom">
        <Field
          name="name"
          component={RenderField}
          type="text"
          validate={[required]}
          placeholder="Title"
        />
      </div>
      <div className="spacing_bottom">
        <Field
          name="link"
          component={RenderField}
          type="text"
          validate={[required]}
          placeholder="link"
        />
      </div>
      {error && <div className="form_error">{error}</div>}
      <button
        type="submit"
        className="admin_form__button"
      >
        Submit
      </button>
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
