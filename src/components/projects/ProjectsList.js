import React from 'react';
import DataTable from 'react-data-table-component';
import { columns } from './ColumnComponent';
export const data = [1, 1, 1, 1, 1, 1, 1, 1].map((el) => ({
  id: 1,
  name: 'John Doe',
  age: 35,
  email: 'johndoe@example.com',
}));

// Add more rows as needed

const ProjectsTable = () => {
  return (
    <DataTable
      title='Projects'
      columns={columns}
      data={data}
      pagination
      highlightOnHover
    />
  );
};

export default ProjectsTable;
