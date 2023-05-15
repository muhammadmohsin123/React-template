import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePeoject() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='btn' onClick={() => navigate('/createProject')}>
        Create Project
      </button>
    </div>
  );
}

export default CreatePeoject;
