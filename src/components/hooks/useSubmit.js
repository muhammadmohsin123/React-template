import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
function useSubmit() {
  const user = useSelector((state) => state.user.userData);
  const submitForm = async ({
    city,
    client_id,
    company_address,
    company_contact,
    company_name,
    country,
    employees_strength,
    facebook_url,
    id,
    instagram_url,
    linkedIn_url,
  }) => {
    const url = `https://invoteams-client.invo.zone/v1/api/company?company_name=${company_name}&company_contact=${company_contact}&company_address=${company_address}&employees_strength=${employees_strength}&client_id=283&facebook_url=${facebook_url}&country=${country}&instagram_url=${instagram_url}&linkedIn_url=${linkedIn_url}&city=${city}`;
    try {
      await axios.post(url);
      toast.success('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form');
    }
  };
  return {
    submitForm,
  };
}

export default useSubmit;
