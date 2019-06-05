import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
/* https://github.com/BBB/dropzone-redux-form-example */
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
const dropzoneStyle = {
  height: '150px',
  width: '150px',
  border: `2px dashed ${props => props.theme.colorText}`,
  color: `${props => props.theme.colorText}`,
  display: 'flex',
  justifyContent: 'center',
  margin: '14px 0px',
  cursor: 'pointer',
  fontSize: '13px',
  padding: '24px',
  boxSizing: 'border-box',
};
const renderDropzoneInput = (field) => {
  const files = field.input.value;
  return (
    <div>
      <Dropzone onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              style={dropzoneStyle}
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
        <div>
          {files.map((file, i) =>
            <div key={i}>
              {file.name}
            </div>
          )}
        </div>
      )}
      {field.meta.touched &&
        field.meta.error &&
        <span>{field.meta.error}</span>}
      <div>
        <StyledButton>
          Submit
        </StyledButton>
      </div>
    </div>
  );
};

let ImagePostForm = ({handleSubmit, error}) => {
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
      <div>
        <Field
          name="image"
          component={renderDropzoneInput}
          instructions="Add Image"
        />
      </div>
      {error && <div>{error}</div>}
    </form>
  );
};

const mapStateToProps = (state, prop) => {
  return{
    initialValues: {
      name: '',
      image: {
        data: null
      },
    },
  };
};

const afterSubmit = (result, dispatch) =>
  dispatch(reset('miscProjects'));

ImagePostForm = reduxForm({
  form: 'miscProjects',
  enableReinitialize: true,
  onSubmitSuccess: afterSubmit,
})(ImagePostForm);

export default connect(mapStateToProps, null)(ImagePostForm);
