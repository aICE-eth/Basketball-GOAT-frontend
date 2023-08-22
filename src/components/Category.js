import { Grid, Slider, TextField, Tooltip } from '@mui/material';
import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useFormik } from 'formik';

export default function Category({ handleChange, attr, value, label, expl }) {
  const formik = useFormik({
    initialValues: {
      inputValue: value.toString(),
    },
    onSubmit: (values) => {
      // Handle form submission if needed
    },
  });

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    formik.setFieldValue('inputValue', inputValue);

    // Update the Slider value
    handleChange(null, parseInt(inputValue), attr);
  };

  const handleSliderChange = (event, newValue) => {
    formik.setFieldValue('inputValue', newValue.toString());

    // Update the Slider value
    handleChange(event, newValue, attr);
  };

  return (
    <li style={{ paddingTop: '5px', paddingBottom:'5px' }}>
      <Grid container>
        <Grid md={4}>
          <div style={{ display: 'flex', gap: '5px' }}>
            {label}
            <div>
              <Tooltip title={expl} arrow>
                <InfoOutlinedIcon style={{ width: '40%' }} />
              </Tooltip>
            </div>
          </div>
        </Grid>
        <Grid md={6}>
          <Slider
            onChange={handleSliderChange}
            value={value}
            aria-label="Small"
            valueLabelDisplay="auto"
            style={{ width: '90%' }}
            step={10}
            min={0}
            max={100}
            marks={true}
          />
        </Grid>
        <Grid md={2}>
            <form onSubmit={formik.handleSubmit}
            style={{width:'50px', display:'flex', alignItems:'center', justifyConten:'center'}}>
              <TextField
                style={{width:'50px',height:'50px', display:'flex', alignItems:'center', justifyConten:'center'}}
                name="inputValue"
                label="value"
                variant="filled"
                size="small"
                value={formik.values.inputValue}
                onChange={handleInputChange}
              />
            </form>
        </Grid>
      </Grid>
    </li>
  );
}
