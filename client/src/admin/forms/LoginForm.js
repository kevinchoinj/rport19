import React from 'react';
import { Field, reduxForm } from 'redux-form';

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

const LoginForm= ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="spacing_bottom">
        <Field
          name="email"
          placeholder="Username"
          type="text"
          component={RenderField}
        />
      </div>
      <div className="spacing_bottom">
        <Field
          name="password"
          placeholder="Password"
          type="password"
          component={RenderField}
        />
      </div>
      {error && <strong>{error}</strong>}
      <div className="user_row">
        <button
          type="submit"
          className="admin_form__button"
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'login',
  enableReinitialize: true,
})(LoginForm);
