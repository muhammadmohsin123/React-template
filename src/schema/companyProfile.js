import * as Yup from 'yup';
export const initialValues = {
  id: 1,
  company_name: '',
  company_contact: '',
  company_address: '',
  employees_strength: '',
  employees_strength: '',
  country: '',
  facebook_url: '',
  instagram_url: '',
  linkedIn_url: '',
  city: '',
  client_id: 2,
};
export const validationSchema = Yup.object({
  company_name: Yup.string().required('Company name is required'),
  company_contact: Yup.string()
    .matches(/^\d+$/, 'Company contact must be a valid phone number')
    .required('Company contact is required'),
  company_address: Yup.string().required('Company address is required'),
  city: Yup.string().required('Company address is required'),
  country: Yup.string().required('Country is required'),
  employees_strength: Yup.string().required('Employees strength is required'),
});
