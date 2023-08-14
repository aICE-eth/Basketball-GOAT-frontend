import { Slider } from '@mui/material'
import React from 'react'

export default function Category({handleChange, attr, value, label}){
   
    return( 
        <li style={{display:'flex', justifyContent:'space-between'}}>
            {label}
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