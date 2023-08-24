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
    handleChange(event, newValue, attr)
  };

  return (
    <li style={{ marginTop: '10px', paddingTop: '5px', paddingBottom:'5px' }}>
      <Grid container>
        <Grid md={3}>
          <div style={{ display: 'flex', gap: '5px', fontWeight:'bold' }}>
            {label}
            <div>
              <Tooltip title={expl} arrow>
                <InfoOutlinedIcon style={{ width: '40%' }} />
              </Tooltip>
            </div>
          </div>
        </Grid>
        <Grid md={7} style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          gap: 15
        }}>
          <div>🤮</div>
          <Slider
            onChange={handleSliderChange}
            // onChangeCommitted={handleSliderChangeCommitted} // Use onChangeCommitted event
            value={value}
            aria-label="Small"
            valueLabelDisplay="auto"
            style={{ width: '90%' }}
            // step={10}
            // min={0}
            // max={100}
            // marks={true}
          />
          <div>🤩</div>
        </Grid>
        <Grid md={2} style={{display:'flex', justifyContent:'center'}}>
            <form onSubmit={formik.handleSubmit}
            style={{width:'57px', fontWeight:'bold'}}>
              <TextField
                style={{width:'57px', fontWeight:'bold'}}
                name="inputValue"
                label="Value"
                variant="outlined"
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
