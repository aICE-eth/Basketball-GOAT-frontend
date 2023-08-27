import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


export default function About(){
    return(
        <div> 
            <ul 
                style={{listStyleType:'none', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '10px 30px 15px 30px',
                backgroundColor: 'black'
                }}>
                <li style={{fontSize: '35px'}}>🏀🐐</li>
                <li style={{fontSize: '35px', color:'white', fontWeight:'500'}}>GOATED OUT</li>
                <li><Link to = '/'><Button variant="contained">HOME</Button></Link></li>
             </ul>
             <Box style={{
                color:'lightgray',
                width:'100%'
                }}>
                
             </Box>
        </div>
    )
}