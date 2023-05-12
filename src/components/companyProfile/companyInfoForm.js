import React, { useRef, useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Formik, Form, useFormikContext } from 'formik';
import { initialValues } from '../../schema/companyProfile';
import FormField from './FormFeildComponent';
import { formFields } from './formFields';
import useSubmit from '../hooks/useSubmit';
import { validationSchema } from '../../schema/companyProfile';
import { useDispatch } from 'react-redux';
import { fetchCompanyData } from '../../store/slice/companyProfileSlice';

function CompanyInfoForm() {
  const formRef = useRef(null);
  const { submitForm } = useSubmit();
  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    await submitForm(values);
    dispatch(fetchCompanyData());
  };

  return (
    <div className='card'>
      <div className='heading'>Company Information</div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        innerRef={formRef}
        validationSchema={validationSchema}
      >
        <Form>
          <Grid container mt={4}>
            {formFields.map((field) => (
              <FormField {...field} />
            ))}

            <Grid container item>
              <button type='submit' className='btn'>
                Save
              </button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </div>
  );
}

export default CompanyInfoForm;
