import React from 'react';

import { Stepper, Step, StepLabel, Button, Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ScreenLayout from './ScreenLayout';
const steps = [
  { label: 'Step 1', component: <DummyComponent1 /> },
  { label: 'Step 2', component: <DummyComponent2 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
  { label: 'Step 3', component: <DummyComponent3 /> },
];

function DummyComponent1() {
  return <div>Step 1 content</div>;
}

function DummyComponent2() {
  return <div>Step 2 content</div>;
}

function DummyComponent3() {
  return <div>Step 3 content</div>;
}

function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <ScreenLayout>
      <div style={{ width: '100%', height: '550px' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(({ label }) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>{steps[activeStep].component}</Box>
      </div>
      <Box
        mb={4}
        sx={{
          border: '0.5px solid rgba(0, 0, 0, 0.3)',
        }}
      ></Box>
      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {activeStep > 0 ? (
          <Button
            onClick={handleBack}
            startIcon={<NavigateBeforeIcon />}
            style={{ marginRight: '8px', color: '#23C26A' }}
          >
            Back
          </Button>
        ) : null}

        <Button
          variant='contained'
          sx={{
            background: ' #23C26A',
            '&:hover': {
              background: '#4CAF50', // change this to the desired hover color
            },
          }}
          disabled={activeStep === steps.length - 1}
          onClick={handleNext}
          endIcon={<NavigateNextIcon />}
        >
          Next
        </Button>
      </div>
    </ScreenLayout>
  );
}

export default StepperComponent;
