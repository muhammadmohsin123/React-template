import React from 'react';
import CreatePeojects from './CreatePeoject';
import ProjectsList from './ProjectsList';
import { Box } from '@mui/system';
function Projects() {
  return (
    <div>
      <Box mb={2}>
        <CreatePeojects />
      </Box>
      <ProjectsList />
    </div>
  );
}

export default Projects;
