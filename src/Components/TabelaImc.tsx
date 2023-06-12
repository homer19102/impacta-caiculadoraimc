import * as React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function TableImc() {
  return (
    
    <TableContainer component={Paper}>
       <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>IMC</TableCell>
              <TableCell align="right">CLASSIFICAÇÃO</TableCell>
              <TableCell align="right">OBESIDADE (GRAU)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>MENOR QUE 18,5</TableCell>
              <TableCell align="right">MAGREZA</TableCell>
              <TableCell align="right">0</TableCell>
            </TableRow>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>ENTRE 18,5 E 24,9</TableCell>
              <TableCell align="right">NORMAL</TableCell>
              <TableCell align="right">0</TableCell>
            </TableRow>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>ENTRE 25,0 E 29,9</TableCell>
              <TableCell align="right">SOBREPESO</TableCell>
              <TableCell align="right">1</TableCell>
            </TableRow>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>ENTRE 30,0 E 39,9</TableCell>
              <TableCell align="right">OBESIDADE</TableCell>
              <TableCell align="right">2</TableCell>
            </TableRow>
            <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>MAIOR QUE 40,0</TableCell>
              <TableCell align="right">OBESIDADE GRAVE</TableCell>
              <TableCell align="right">3</TableCell>
            </TableRow>
          </TableBody>
       </Table>
    </TableContainer>
  );
}
