import React from 'react';
import { Formik, Form, Field, useFormikContext, ErrorMessage } from 'formik';
function ErrorMessageComponent({ name }) {
  return (
    <ErrorMessage name={name}>
      {(msg) => <div className='error'>{msg}</div>}
    </ErrorMessage>
  );
}

export default ErrorMessageComponent;
