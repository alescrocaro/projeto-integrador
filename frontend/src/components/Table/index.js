import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, data) {
  return { name, data };
}


export default function MyTable({ 
    data, 
    scientificTable=false, 
    detailsTable=false 
  }) {
  const rowsScientificTable = [
    createData('Reino', data.kingdom),
    createData('Filo', data.phylum),
    createData('Classe', data.className),
    createData('Ordem', data.order),
    createData('Família', data.family),
    createData('Gênero', data.genus),
    createData('Espécie', data.specie),
  ];
  const rowsDetailsTable = [
    createData('Clima', data.weather),
    createData('Bioma', data.weather),
    createData('Coordenadas', '-10.24, -48.29'),
    createData('Cidade', data.city),
    createData('Data', data.dateFound),
  ];
  return (
    <>
      {scientificTable &&
        <TableContainer component={Paper} sx={{margin: '5px', maxWidth: '90%'}}>
          <Table sx={{ minWidth: '100%' }} size="small" aria-label="a table">
            <TableBody>
              {rowsScientificTable.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
      {detailsTable &&
        <TableContainer component={Paper} sx={{margin: '5px', maxWidth: '90%'}}>
          <Table sx={{ minWidth: '100%' }} size="small" aria-label="a table">
            <TableBody>
              {rowsDetailsTable.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      }
    </>
  );
}
