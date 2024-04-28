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

export default function StyledTable({ 
    data, 
    scientificTable=false, 
    detailsTable=false 
  }) {
  
  let table;
  const date = new Date(data.dateFound);
  
  //cordenadas
  let lat = 0, lng = 0;

  if(data.latlng){
    lat = data.latlng.coordinates[1].toFixed(5);
    lng = data.latlng.coordinates[0].toFixed(5);
  }

  if (scientificTable){
  // const rowsScientificTable = [
    table = [
      createData('Reino:', data.kingdom),
      createData('Filo:', data.phylum),
      createData('Classe:', data.className),
      createData('Ordem:', data.order),
      createData('Família:', data.family),
      createData('Gênero:', data.genus),
      createData('Espécie:', data.specie),
    ];
  }else{
    // const rowsDetailsTable = [   
    table = [
      createData('Clima:', data.weather),
      createData('Bioma:', data.biome),
      createData('Coord:', `Lat: ${lat}, Lng: ${lng}`),
      createData('Cidade:', data.city),
      createData('Data:', date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()),
    ];
  }

  return (
        <TableContainer component={Paper} sx={{width: '100%'}}>
          <Table sx={{ minWidth: '100%' }} size="small" aria-label="a table">
            <TableBody>
              {table.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 } ,
                    // '&:nth-child(odd)': {backgroundColor: '#f5f5f5'}
                  }}
                >
                  <TableCell component="th" scope="row" sx={{
                    width: '20%',
                    overflow: 'hidden',
                    borderRight: '1px solid #f0f0f0',
                  }}>
                    {row.name}
                  </TableCell>
                  <TableCell>{row.data}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  );
}
