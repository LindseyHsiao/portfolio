

import { useState } from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';




export default function ComposedTextField() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = () => {
    console.log(formData)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <form  className='contactForm' target="_blank" action="https://formsubmit.co/lindsey350@aol.com" method="POST" >
      {/* <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',

          p: 2,
          // m: 2,
          bgcolor: 'background.paper',
          borderRadius: 1,
          gap: 1

        }}
        noValidate
        autoComplete="off"
      > */}
        <h1>Contact Form</h1>
        <FormControl sx={{ width: '80%' }}>
          <InputLabel htmlFor="component-outlined">Name</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={formData.name}
            onChange={handleChange}
            label="Name"
            name='name'
          />
        </FormControl>
        <FormControl sx={{ width: '80%' }}>
          <InputLabel htmlFor="component-outlined">Email</InputLabel>
          <OutlinedInput
            id="component-outlined"
            value={formData.email}
            onChange={handleChange}
            label="Email"
            type='email'
            name='email'
          />
        </FormControl >
        <FormControl sx={{ width: '80%' }}>
          {/* <InputLabel htmlFor="component-outlined" fullWidth={true}>Message</InputLabel> */}
          <TextField
            id="component-outlined"
            value={formData.message}
            onChange={handleChange}
            label="Message"
            multiline
            rows={4}
            maxRows={6}
            name='message'

          />
        </FormControl>

        <Button sx={{ p: 2, width: '50%' }} variant="contained" type='submit' onClick={handleSubmit}>Submit</Button>
      {/* </Box> */}
    </form>
  );
}
