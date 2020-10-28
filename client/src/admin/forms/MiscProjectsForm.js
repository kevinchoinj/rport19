import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import AdminButton from 'admin/components/AdminButton';
import {Label} from 'admin/components/general';

const MiscProjectsForm = ({onSubmit}) => {
  // Notice that we have to initialize ALL of fields with values. These
  // could come from props, but since we don't want to prefill this form,
  // we just use an empty string. If you don't do this, React will yell
  // at you.

  const fileUpload = React.createRef();
  const [photo, setPhoto] = useState(null);
  const [fileName, setFileName] = useState('');

  const setFile = evt => {
    setPhoto(evt.target.files[0]);
    setFileName(evt.target.files[0]?.name);
  };
  const openUploadDialog = () => {
    fileUpload.current.click();
  };

  const handleSubmit = async evt => {
    try {
      let bodyFormData = new FormData();
      bodyFormData.set('name', evt.name);
      bodyFormData.set('link', evt.link);
      bodyFormData.append('image', photo);
      await onSubmit(bodyFormData);
    } catch (error) {
      alert('Upload must be an image');
    }
  };
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        link: '',
        image: {},
      }}
      onSubmit={handleSubmit}
    >
      {(values, isSubmitting) =>
        <Form>
          <Label label="Name"/>
          <Field name="name"/>

          <Label label="Link"/>
          <Field name="link"/>

          <Label label="Image"/>
          <input
            type="file"
            ref={fileUpload}
            name="image"
            style={{ display: 'none' }}
            onChange={setFile}
          />
          <div className="file-box">
            <button type="button" onClick={openUploadDialog}>
              Upload Photo
            </button>
            <br/>
            Image Name: {fileName}
            <br/><br/><br/>
          </div>
          <AdminButton disabled={isSubmitting} type="submit">
            Submit
          </AdminButton>
        </Form>
      }
    </Formik>
  );
};


export default MiscProjectsForm;