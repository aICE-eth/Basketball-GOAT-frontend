import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from "@mui/material";
import { useDataContext } from "./DataContext";

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


    return (
        <TableContainer component={Paper} style={{borderRadius:15, display:'flex',justifyContent:'center', color:'black'}}>
            <Table sx={{ minWidth: 300 }} style={{borderRadius:15, width:'80%'}} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell align="center"style={{
                      fontSize:24,
                      }}>
                        Ranking🏅
                        </StyledTableCell>
                    <StyledTableCell align ='center' style={{
                      fontSize:24,
                      
                      }}>
                      NBA Player🏀
                      </StyledTableCell>
                      <StyledTableCell align ='center' style={{
                      fontSize:24,
                      }}>
                      Team⛹️‍♂️
                      </StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, id) => (
                    <StyledTableRow key={id}>
                    <StyledTableCell align='left' component="th" scope="row">
                        <Grid container style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <Grid style={{display:'flex', alignItems:'center'}}>
                              <div style={{
                                color:'gold', 
                                textShadow: `-2px 0 white, 0 1px white, 1px 0 white, 0 -1px white`,
                                fontSize:26,
                                fontWeight:'bold'}}>
                              {row.rank}.
                              </div>
                          </Grid>
                        </Grid>
                    </StyledTableCell>
                    
                    <StyledTableCell align='left'> 
                      <div style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        gap:5,
                        fontSize:26,
                        paddingLeft:250
                      }}>
                        <div style={{
                        color:'white', 
                        fontSize: 24,
                        fontWeight:'bold', 
                        textShadow: `-4px 0 ${row.color}, 0 1px ${row.color}, 1px 0 ${row.color}, 0 -1px ${row.color}`}}>
                            {row.name}
                        </div>
                        {getMedalEmoji(row.rank)}
                      </div>
                    </StyledTableCell >
                        
                    <StyledTableCell align="left" style={{paddingLeft:100}}>
                      <div style={{fontSize:20,fontWeight:'bold', color:`${row.color}`}}>{row.emoji}</div>
                    </StyledTableCell>
                    </StyledTableRow>
                    
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
}