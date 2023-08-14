import { Slider } from '@mui/material'
import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Category({handleChange, attr, value, label, expl}){
   
    return( 
        <li style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{display:'flex', gap: '5px'}}>
                {label}
                <div>
                    <Tooltip title={expl} arrow>
                        <InfoOutlinedIcon style={{width: '40%'}} />
                    </Tooltip>
                </div>
            </div>
            <Slider
                onChange={(e, val) => handleChange(e, val, attr)}
                value={value}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{width: '70%'}}
            />
        </li> 
    )
}