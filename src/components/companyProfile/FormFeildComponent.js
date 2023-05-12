import React, { useMemo, useEffect } from 'react';
import { Formik, Form, Field, useFormikContext, ErrorMessage } from 'formik';
import ErrorMessageComponent from './ErrorMessageComponent';
import Select from 'react-select';
import { Grid } from '@mui/material';
import countryList from 'react-select-country-list';
import { useSelector } from 'react-redux';

const FormField = ({ label, name, type, options }) => {
  const companyProfile = useSelector(
    (state) => state.companyProfile.companyProfile
  );
  const getCountryOptions = () => {
    return countryList()
      .getData()
      .map((country) => ({
        label: country.label,
        value: country.label,
      }));
  };
  const { values, setFieldValue, errors, setValues } = useFormikContext();
  useEffect(() => {
    setValues({
      company_name: companyProfile.company_name || '',
      company_contact: companyProfile.company_contact || '',
      company_address: companyProfile.company_address || '',
      employees_strength: companyProfile.employees_strength || '',
      country: companyProfile.country || '',
      facebook_url: companyProfile.facebook_url || '',
      instagram_url: companyProfile.instagram_url || '',
      linkedIn_url: companyProfile.linkedIn_url || '',
      city: companyProfile.city || '',
      client_id: companyProfile.client_id || '',
    });
  }, [companyProfile]);
  console.log({ values });
  if (type === 'text') {
    return (
      <Grid item sm={6} pr={2} mb={2}>
        <label className='label' htmlFor='name'>
          {label}
        </label>
        <Field className='inputElement' id={name} name={name} placeholder='' />
        <ErrorMessageComponent name={name} />
      </Grid>
    );
  }
  if (type === 'country') {
    const countryOptions = getCountryOptions();
    return (
      <Grid item sm={6} pr={1} mb={2}>
        <label className='label' htmlFor={name}>
          {label}
        </label>
        <Select
          id={name}
          value={{ label: values[name], value: values[name] }}
          name={name}
          options={countryOptions}
          onChange={(option) => {
            setFieldValue(name, option ? option.value : '');
          }}
        />
      </Grid>
    );
  }
  if (type === 'select') {
    return (
      <Grid item sm={6} pr={1} mb={2}>
        <label className='label' htmlFor={name}>
          {label}
        </label>
        <Select
          id={name}
          value={{ label: values[name], value: values[name] }}
          name={name}
          options={options}
          onChange={(option) => {
            setFieldValue(name, option ? option.value : '');
          }}
        />
      </Grid>
    );
  }

  // Add more types as needed

  return null;
};
export default FormField;
