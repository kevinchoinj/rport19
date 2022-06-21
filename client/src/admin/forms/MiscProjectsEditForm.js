import React from "react";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import AdminButton from "admin/components/AdminButton";
import { Label } from "admin/components/general";

import { selectImagesProjectsById } from "reducers";

const MiscProjectsEditForm = ({ id, onSubmit }) => {
  const projectData = useSelector((state) => selectImagesProjectsById(state, id));
  return (
    <Formik enableReinitialize initialValues={projectData?.doc} onSubmit={(values) => onSubmit(values)}>
      {(isSubmitting) => (
        <Form>
          <Label label="Name" />
          <Field name="name" />

          <Label label="Link" />
          <Field name="link" />
          <AdminButton disabled={isSubmitting} type="submit">
            Submit
          </AdminButton>
        </Form>
      )}
    </Formik>
  );
};

export default MiscProjectsEditForm;
