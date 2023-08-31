import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Grid } from "@mui/material";
import { useDataContext } from "./DataContext";
import Confetti from 'react-confetti'
import { Link } from "react-router-dom";

export default function Ranking(){

  const { data } = useDataContext();
  console.log(data)

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    function createData(rank, name, emoji, color) {
        return {rank, name, emoji, color};
      }

      const rows = data.map((player, index) => {
        return createData(
            index + 1,
            player.Player,
            player.Emoji,
            player.Color
        )
      })

      const getMedalEmoji = (rank) => {
        if (rank === 1) return "🥇";
        if (rank === 2) return "🥈";
        if (rank === 3) return "🥉";
        return "";
      };

      const [showConfetti, setShowConfetti] = useState(true); // State to control confetti visibility

      useEffect(() => {
        // Start the confetti
        if (showConfetti) {
          setTimeout(() => {
            setShowConfetti(false);
          }, 3400);
        }
      }, [showConfetti]);

      const confettiSource = {
        x: window.innerWidth / 2,  // Center of the screen horizontally
        y: window.innerHeight,     // Bottom of the screen vertically
      };

    return (
     <div style={{background:'black', height:'100vh', display:'flex', justifyContent: 'center', gap:10}}>
      <div style={{
        fontSize:55,
        color:'white',
        width:'20vh',
        fontWeight:'bold'
      }}>
        <br />
      Y<br />
      O<br />
      U<br />
      R<br />
      <br />
      T<br />
      O<br />
      P<br />
      </div>
      
      {showConfetti && (
        <Confetti
          confettiSource={confettiSource}
          numberOfPieces={200}
          gravity={0.000001}
          width={window.innerWidth}
          initialVelocityY={10}
        />
      )}
 
        <TableContainer component={Paper} style={{borderRadius:15, width:'70%'}}>
            <Table sx={{ minWidth: 300 }} style={{borderRadius:15,  }} aria-label="customized table">
                <TableHead>
                <TableRow >
                    <StyledTableCell align="center"style={{
                      fontSize:20,
                      }}>
                        Ranking🏅
                        </StyledTableCell>
                    <StyledTableCell align ='center' style={{
                      fontSize:20,
                      }}>
                      NBA Player🏀
                      </StyledTableCell>
                      <StyledTableCell align ='center' style={{
                      fontSize:20,
                      }}>
                      Team⛹️‍♂️
                      </StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, id) => (
                    <StyledTableRow key={id}>
                    <StyledTableCell align='center' component="th" scope="row">
                      <div style={{
                        color:'gold', 
                        textShadow: `-2px 0 white, 0 1px white, 1px 0 white, 0 -1px white`,
                        fontSize:22,
                        fontWeight:'bold'}}>
                      {row.rank}.
                      </div>
                    </StyledTableCell>
                    
                    <StyledTableCell align='center'> 
                      <div style={{
                        display:'flex',
                        justifyContent:'center',
                        gap:5,
                        fontSize:22,
                      }}>
                        {getMedalEmoji(row.rank)}
                        <div style={{
                        color:'white', 
                        fontSize: 22,
                        fontWeight:'bold', 
                        textShadow: `-4px 0 ${row.color}, 0 1px ${row.color}, 1px 0 ${row.color}, 0 -1px ${row.color}`}}>
                            {row.name}
                        </div>
                      </div>
                    </StyledTableCell >
                        
                    <StyledTableCell align="center" >
                      <div style={{fontSize:20,fontWeight:'bold', color:`${row.color}`}}>{row.emoji}</div>
                    </StyledTableCell>
                    </StyledTableRow>
                    
                ))}
                </TableBody>
            </Table>
        </TableContainer>
      <div style={{
        fontSize:55,
        color:'white',
        width:'20vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end',
        fontWeight:'bold',
        paddingTop:'10px',
        gap:28
      }}>
      
      <Link to='/SliderPage' style={{fontSize:20}}><Button variant='contained'>back</Button></Link>
  
      T<br />
      E<br />
      N<br />
      <br />
      G<br />
      O<br />
      A<br />
      T<br />
      
      </div>                   

        </div>
        );
}