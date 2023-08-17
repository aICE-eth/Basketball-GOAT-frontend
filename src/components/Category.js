import { Grid, Paper, Slider } from '@mui/material'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Category({handleChange, attr, value, label, expl}){
   
    return( 
        <li style={{paddingTop:'5px'}}>
            <Grid container>
                <Grid md={4}>
                    <div style={{display:'flex', gap: '5px',}}>
                        {label}
                        <div >
                            <Tooltip title={expl} arrow>
                                <InfoOutlinedIcon style={{width: '40%'}} />
                            </Tooltip>
                        </div>
                    </div>
                </Grid>
                <Grid md={7}>
                    <Slider
                        onChange={(e, val) => handleChange(e, val, attr)}
                        value={value}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        style={{width: '90%'}}
                    />
                </Grid>
                <Grid>
                    <div>
                        <Paper style={{padding: '2px 3px 2px 3px', display:'flex', alignItems:'center'}}>{value}</Paper>
                    </div>
                </Grid>
                </Grid>
        </li> 
    )
}