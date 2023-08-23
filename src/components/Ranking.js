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

export default function Ranking({data}){
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
      
    function createData(name, emoji, color) {
        return {name, emoji, color};
      }

      const rows = data.map((player) => {
        return createData(
            player.Player,
            player.Emoji,
            player.Color
        )
      })



    return (
        <TableContainer component={Paper} style={{borderRadius:15}}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell style={{display:'flex', justifyContent:'space-around', alignItems:'center', fontSize:30}}>🔥HERE ARE YOUR GOATS IN ORDER🐐</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, id) => (
                    <StyledTableRow key={id}>
                    <StyledTableCell style={{display:'flex', justifyContent:'space-around', alignItems:'center'}} scope="row">
                        <Grid container>
                          <Grid md={6} style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                            <div style={{
                              textShadow: `-2.5px 0 ${row.color}, 0 1px ${row.color}, 1px 0 ${row.color}, 0 -1px ${row.color}`,
                              color: 'white',
                              fontSize: 24,
                              fontWeight:'bold'
                          
                            }}>
                              {row.name}
                            </div>
                          </Grid>
                          <Grid md={6} style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                            <div style={{fontSize:'40px'}}>{row.emoji}</div>
                          </Grid>
                        </Grid>
                    </StyledTableCell>
    
                    </StyledTableRow>
                    
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
}