const countryOptions = [
  { value: 'USA', label: 'United States' },
  { value: 'CAN', label: 'Canada' },
  { value: 'GBR', label: 'United Kingdom' },
  { value: 'FRA', label: 'France' },
  { value: 'GER', label: 'Germany' },
  { value: 'ESP', label: 'Spain' },
  { value: 'ITA', label: 'Italy' },
  { value: 'JPN', label: 'Japan' },
  { value: 'AUS', label: 'Australia' },
  { value: 'NZL', label: 'New Zealand' },
];
const employeeOptions = [
  { value: '>50', label: 'Less than 50 employees' },
  { value: '50-100', label: '50 to 100 employees' },
  { value: '101-500', label: '101 to 500 employees' },
  { value: '501-1000', label: '501 to 1000 employees' },
  { value: '1001-5000', label: '1001 to 5000 employees' },
  { value: '<5000', label: 'More than 5000 employees' },
];
export const formFields = [
  { type: 'text', label: 'Company name', name: 'company_name' },
  { type: 'text', label: 'Company Contact', name: 'company_contact' },
  {
    type: 'select',
    label: 'Employee Strength',
    name: 'employees_strength',
    options: employeeOptions,
  },
  { type: 'text', label: 'Company Address', name: 'company_address' },
  { type: 'text', label: 'City', name: 'city' },
  {
    type: 'country',
    label: 'Country',
    name: 'country',
    options: countryOptions,
  },

  { type: 'text', label: 'Linkedin Url', name: 'linkedIn_url' },
  { type: 'text', label: 'Instagram Url', name: 'instagram_url' },
  { type: 'text', label: 'Facebook Url', name: 'facebook_url' },
];
