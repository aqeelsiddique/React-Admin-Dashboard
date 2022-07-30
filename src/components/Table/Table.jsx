import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  '../Table/Table.css'

function createData(
    name, Id, date, result
) {
  return { name, Id, date, result };
}

const rows = [
    createData("Ali", "FA19-BSE-001", "7 july 2022", "pass"),
    createData("Aqeel", "FA19-BSE-003", "7 july 2022", "fail"),
    createData("Umer", "FA19-BSE-008", "7 july 2022", "pass"),
    createData("Abdullah", "FA19-BSE-009", "7 july 2022", "fail"),
    createData("Zeeshan", "FA19-BSE-009", "7 july 2022", "medium"),
];

const makeStyles=(result) => {
    if(result==="Pass")
    {
        return {
            background: 'rgb(145 254 159 / 475)',
            color:'green'
        }

    }
    else if (result==="fail"){
        return {
            background: '#ffadad8f',
            color:'red'
        }

    }
    else if (result==="pass"){
      return {
        background: 'rgb(145 254 159 / 475)',
        color:'green'
      }

  }
    else {
        return {
            background: 'white',
            color:'blue'
        }

    }
    



}

export default function BasicTable() {
   
  return (
    <div className='Table'>
        <h3>Recent Order</h3>
    <TableContainer component={Paper}
    style={{
        boxShadow: "0px 13px 20px 0px #80808029"

    }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="left">Student ID</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Result</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.Id}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='result' style={makeStyles(row.result)}>
                    {row.result}

                </span>

              </TableCell>
              <TableCell align="left" className='details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
