
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MainPage(){
    return(
    <div style={{
        display:'flex',
        flexDirection:'column',
        height: '100vh'
      }}>
        <ul 
        style={{listStyleType:'none', 
        display: 'flex', 
        justifyContent:'center',
        alignItems: 'center',
        padding: '10px 30px 15px 30px',
        backgroundColor: 'black'
        }}>
            <li style={{fontSize: '35px'}}>🏀</li>
            <li style={{fontSize: '35px', color:'white', fontWeight:'500'}}>GOATED OUT</li>
            <li style={{fontSize: '35px'}}>🐐</li>
        </ul>
        
        <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        flex: 1,
        gap: 15}}>
            <h1 style={{fontSize:'50px'}}>🔥Discover Your G.O.A.T.🔥</h1>
            <p style={{color:'gray'}}>What would it take to become the Greatest of All Time?</p>
            <Link to = '/SliderPage'><Button variant="contained">START</Button></Link>
        </div>
    </div>
    )
}