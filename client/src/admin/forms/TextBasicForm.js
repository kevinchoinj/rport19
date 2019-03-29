import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

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

class TextBasicForm extends React.Component {
  render() {
    const {
      handleSubmit,
      error,
      textInputs,
    } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" className="admin_form">
        {textInputs && textInputs.length > 1 ? textInputs.map((value, key) => {
          return (
            <div className="spacing_bottom" key={key}>
              <Field
                name={value.name}
                component={RenderField}
                type={value.type}
                placeholder={value.name}
              />
            </div>
          );
        })
          :
          <div className="spacing_bottom">
            <Field
              name={textInputs[0].name}
              component={RenderField}
              type={textInputs[0].type}
              placeholder={textInputs[0].name}
            />
          </div>
        }

        {error && <div className="form_error">{error}</div>}

        <div>
          <button
            type="submit"
            className="admin_form__button"
          >
            Submit
          </button>
        </div>

      </form>
    );
  }
}

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
