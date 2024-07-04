import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert() {
  return (
    <div className='w-[400px] float-right'>
      <Alert variant="filled"    severity="warning">
      
      Posting 90% of your sensitive personal data
    </Alert>
    </div>
    
  );
}