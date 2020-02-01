import React from 'react';
import {connect} from 'react-redux';
import {Formik, Form, Field} from 'formik';
import AdminButton from 'admin/components/AdminButton';
import {Label} from 'admin/components/general';

import {selectImagesProjectsById} from 'reducers';

const MiscProjectsEditForm = ({projectData, onSubmit}) => {
  return (
    <Formik
      enableReinitialize
      initialValues={projectData?.doc}
      onSubmit={values => onSubmit(values)}
     >
       {(isSubmitting) =>
        <Form>
          <Label label="Name"/>
          <Field name="name"/>

          <Label label="Link"/>
          <Field name="link"/>
          <AdminButton disabled={isSubmitting} type="submit">
            Submit
          </AdminButton>
        </Form>
      }
    </Formik>
  )
};

const mapStateToProps = (state, props) => {
  return{
    projectData: selectImagesProjectsById(state, props.id),
  };
};
export default connect(mapStateToProps, null)(MiscProjectsEditForm);
