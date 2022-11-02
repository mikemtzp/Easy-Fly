import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(title, data) {
  return {
    title, data,
  };
}

export default function BasicTable(props) {
  const {
    jet, price, origin, start, end,
  } = props;

  const data = [
    createData('Jet', jet),
    createData('City', origin),
    createData('Start Date', start),
    createData('Finish Date', end),
    createData('Price', `$${price}`),
  ];
  return (
    <TableContainer>
      <Table sx={{ minWidth: 450, marginBottom: '2rem' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: '700', fontSize: '2rem' }}>Details</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: '700', fontSize: '2rem' }} align="right">Selected</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow
              key={d.title}
              sx={{}}
            >
              <TableCell sx={{ color: 'white', fontWeight: '700', fontSize: '2rem' }} component="th" scope="row">{d.title}</TableCell>
              <TableCell sx={{ color: 'white', fontSize: '2rem' }} align="right">{d.data}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BasicTable.propTypes = {
  jet: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  start: PropTypes.string,
  end: PropTypes.string,
};

BasicTable.defaultProps = {
  start: '',
  end: '',
};
