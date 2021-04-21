import { connect, FormikContextType, FormikValues } from 'formik';
import React from 'react';

interface FormikPartProps {
  formik: FormikContextType<any>;
}

interface ReviewProps {
  formData?: FormikValues;
}

const Review: React.FC<ReviewProps & FormikPartProps> = ({ formik }) => {
  console.log(formik);
  return (
    <div>
      <button type="button" onClick={() => formik.handleSubmit()}>
        test
      </button>
    </div>
  );
};

export default connect<ReviewProps, {}>(Review);
