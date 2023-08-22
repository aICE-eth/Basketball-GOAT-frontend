import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
      
    function createData(name, pic) {
        return { name, pic};
      }

      console.log(data)
      
    
      const rows = data.map((attr) => {
        return createData(
            attr.Player,
            <img style={{width: '100px'}}src= {`/bball/${attr.Player}.png`}></img>,
        )
      })

    return (
        <TableContainer component={Paper} style={{borderRadius:15}}>
            <Table sx={{ minWidth: 300 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell >Ranking in Order</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, id) => (
                    <StyledTableRow key={id}>
                    <StyledTableCell style={{display:'flex', justifyContent:'space-around'}} scope="row">
                        <div>{row.name}</div>
                        <div>{row.pic}</div>
                    </StyledTableCell>
    
                    </StyledTableRow>
                    
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
}