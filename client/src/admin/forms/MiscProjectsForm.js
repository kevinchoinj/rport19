import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
/* https://github.com/BBB/dropzone-redux-form-example */
import classNames from 'classnames';
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

const renderDropzoneInput = (field, {nameValue}) => {
  const files = field.input.value;
  return (
    <div>
      <div className="form_dropzone__wrapper">
        <Dropzone
          onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}

        >
          {({getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                className={classNames('admin_dropzone', {'admin_dropzone--isActive': isDragActive})}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            );
          }}
        </Dropzone>
        {files && Array.isArray(files) && (
          <div className="admin_form">
            {files.map((file, i) =>
              <div key={i} className="spacing_bottom">
                {file.name}
              </div>
            )}
          </div>
        )}
      </div>
      {field.meta.touched &&
        field.meta.error &&
        <span className="error">{field.meta.error}</span>}
      <div>
        <button
          type="submit"
          className="admin_form__button"
        >
          Submit
        </button>
      </div>

    </div>
  );
};

class ImagePostForm extends React.Component {
  render() {
    const { handleSubmit,
      error,
    } = this.props;

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
        <div>
          <Field
            name="image"
            component={renderDropzoneInput}
            instructions="Add Image"
          />
        </div>

        {error && <div className="form_error">{error}</div>}

      </form>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    initialValues: {
      name: '',
      image: {
        data: null
      },
    },
  };
}
function mapDispatchToProps(dispatch){
  return {
  };
}

const afterSubmit = (result, dispatch) =>
  dispatch(reset('miscProjects'));

ImagePostForm = reduxForm({
  form: 'miscProjects',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
})(ImagePostForm);

export default connect(mapStateToProps, mapDispatchToProps)(ImagePostForm);
